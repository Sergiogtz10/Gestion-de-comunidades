from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity



bills=Blueprint('bills',__name__)

#route to create bills
@bills.route('/<incident_id>',methods=['POST'])
@jwt_required()
def create(incident_id):
    body=request.get_json()
    user_id=get_jwt_identity()
    user=get_user_by_id(user_id["id"])
    user=user.serialize()
    new_bill=create_bill(body,incident_id,user["role"]["role_id"])
    #modificar el registro de incidencia asignandole la factura

    if new_bill is None:
        return jsonify('Internal server error'),500
    elif new_bill==False:
        return jsonify('Bad Request'),400
    else:
        return jsonify(new_bill),201

#route to get bills
@bills.route('/<community_id>',methods=['GET'])
def get_bills(community_id):
    return get_all_bills(community_id)

#route to modify bills
@bills.route('/<bill_id>',methods=['PUT'])
@jwt_required()
def update(incident_id):
    user_id=get_jwt_identity()
    user=get_user_by_id(user_id["id"])
    user=user.serialize()
    body=request.get_json()
    return modify_bill(user["role"]["role_id"],bill_id,body)


#route to delete bills
@bills.route('/<bill_id>',methods=['DELETE'])
@jwt_required()
def delete(bill_id):
    user_id=get_jwt_identity()
    user=get_user_by_id(user_id["id"])
    user=user.serialize()
    return delete_bill(user["role"]["role_id"],bill_id)