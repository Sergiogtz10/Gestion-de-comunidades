from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.rel_user_community.controller import getCommunity_by_user_id
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

rels = Blueprint('rels', __name__)

@rels.route('/',methods=['GET'])
@jwt_required()
def getCommunity():
    user_id = get_jwt_identity()
    community = getCommunity_by_user_id(user_id['id'])
    print(community)
    if community is None:
        return jsonify('relationship not found'), 404
         
    return jsonify(community), 200