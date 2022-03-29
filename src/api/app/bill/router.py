from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
from api.app.bill.controller import create_bill,get_all_bills,modify_bill,get_bill_by_id
from api.app.incident.controller import add_bill
from api.app.user.controller import get_user_by_id
from api.models.index import Bill



bills=Blueprint('bills',__name__)

#route to create bills
@bills.route('/<community_id>/<incident_id>',methods=['POST'])
@jwt_required()
def create(community_id,incident_id):
    body=request.get_json()
    user_id=get_jwt_identity()
    user=get_user_by_id(user_id["id"])
    user=user.serialize()
    new_bill=create_bill(body,community_id,user["role"]["role_id"])
    #modificar el registro de incidencia asignandole la factura
    add_bill(new_bill["id"],incident_id, user["role"]["role_id"])

    if new_bill is None:
        return jsonify('Internal server error'),500
    elif new_bill==False:
        return jsonify('Bad Request'),400
    else:
        return jsonify(new_bill),201

#route to get bills
@bills.route('/',methods=['GET'])
@jwt_required()
def get_bills():
    return get_all_bills()

#route to get bill by id
@bills.route('/factura/<bill_id>',methods=["GET"])
@jwt_required()
def get_bill(bill_id):
    if bill_id is None:
        return jsonify('bill not found'), 404
    return jsonify(get_bill_by_id(bill_id).serialize()),200

#route to modify bills
@bills.route('/<bill_id>',methods=['PUT'])
@jwt_required()
def update(bill_id):
    user_id=get_jwt_identity()
    user=get_user_by_id(user_id["id"])
    user=user.serialize()
    body=request.get_json()
    return modify_bill(user["role"]["role_id"],bill_id,body)


