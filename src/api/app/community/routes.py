from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.community.controller impor register_community,get_community_by_id
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity


communities= Blueprint('communities',__name__)

@communities.route('/register',methods=['POST'])
def create_community():
    body=request.get.json()
    new_community=register_community(body)
    if new_community is None:
        return jsonify('Internal server error'),500
    elif new_community==False: 
        return jsonify('Bad Request'),400
    else:
        return jsonify(new_community),201

@communities.route('/',methods=['GET'])
@jwt_required
def get_community():
    community_id=get_jwt_identity()
    community=get_community_by_id(community_id['id'])
    if community is None:
        return jsonify('Community not found'),404

    return jsonify(community.serialize()),200