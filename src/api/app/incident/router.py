from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.incident.controller import create_common_incident,create_owner_incident,get_incident_by_id,get_incidents,get_owner_incidents,delete_incident,modify_incident
from api.app.user.controler import get_user_by_id
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
from api.models.index import Incident

incidents=Blueprint('incidents',__name__)

#route to create common incidents
@incidents.route('/common/<community_id>',methods=['POST'])
@jwt_required()
def create_common_incidents(community_id):
    body=request.get_json()
    user_id=get_jwt_identity()
    user=get_user_by_id(user_id["id"])
    user=user.serialize()
    new_incident=create_common_incident(body,community_id,user["id"])
    if new_incident is None:
        return jsonify('Internar server error'),500
    elif new_incident==False:
        return jsonify('Bad Request'),400
    else:
        return jsonify(new_incident),201

#route to create particular incidents
@incidents.route('/owner/<community_id>',methods=['POST'])
@jwt_required()
def create_owner_incidents(community_id):
    body=request.get_json()
    user_id=get_jwt_identity()
    user=get_user_by_id(user_id["id"])
    user=user.serialize()
    new_incident=create_owner_incident(body,community_id,user["id"])
    if new_incident is None:
        return jsonify('Internar server error'),500
    elif new_incident==False:
        return jsonify('Bad Request'),400
    else:
        return jsonify(new_incident),201

#route to get particular incidents
@incidents.route('/particular',methods=['GET'])
@jwt_required()
def get_incidents():
    user_id=get_jwt_identity()
    user=get_user_by_id(user_id["id"])
    user=user.serialize()
    incidents=get_owner_incidents(user["id"])
    return incidents

#route to get all common incidents
@incidents.route('/common',methods=['GET'])
def get_all_incidents():
    return get_incidents()
    
#route to delete incidents
@incidents.route('/<incident_id>',methods=['DELETE'])
def delete(incident_id):
    return delete_incident(incident_id)


#route to update incidents
@incidents.route('/<incident_id>',methods=['PUT'])
def update(incident_id):
    body=request.get_json()
    return modify_incident(incident_id,body)
