from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
from api.app.user.controller import get_user_by_id
from api.app.provider.controller import get_all_providers,create_provider,modify_provider
from api.models.index import Provider

providers=Blueprint('providers',__name__)

#route to get providers
@providers.route('/<community_id>',methods=['GET'])
@jwt_required()
def get_providers(community_id):
    return get_all_providers(community_id)


#route to create providers
@providers.route('/<community_id>',methods=['POST'])
@jwt_required()
def create(community_id):
    body=request.get_json()
    user_id=get_jwt_identity()
    user=get_user_by_id(user_id["id"])
    user=user.serialize()
    new_provider=create_provider(body,community_id,user["role"]["role_id"])
    

    if new_provider is None:
        return jsonify('Internal server error'),500
    elif new_provider==False:
        return jsonify('Bad Request'),400
    else:
        return jsonify(new_provider),201

#route to update providers
@providers.route('/<provider_id>',methods=['PUT'])
@jwt_required()
def update(provider_id):
    user_id=get_jwt_identity()
    user=get_user_by_id(user_id["id"])
    user=user.serialize()
    body=request.get_json()
    return modify_provider(user["role"]["role_id"],provider_id,body)