from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.user.controler import register_owner, register_admin, login_user, get_user_by_id, update_user_info, delete_user
from api.app.rel_user_community.controller import create_rel
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from api.app.rel_user_community.controller import delete_rel

users = Blueprint('users', __name__)

#REGISTER OWNER
@users.route('/register/owner/<community_id>', methods=['POST'])
def create_user_owner(community_id):
    body = request.get_json()
    new_user = register_owner(body)
    if new_user is None:
        return jsonify('Internal server error'), 500
    elif new_user == False:
        return jsonify('Bad Request'), 400
    else:
        create_rel(community_id, new_user["id"])
        return jsonify(new_user), 201

#REGISTER ADMIN
@users.route('/register/admin', methods=['POST'])
def create_user_admin():
    body = request.get_json()
    new_user = register_admin(body)
    if new_user is None:
        return jsonify('Internal server error'), 500
    elif new_user == False:
        return jsonify('Bad Request'), 400
    else:
        return jsonify(new_user), 201

#LOGIN
@users.route('/login', methods=['POST'])
def user_login():
    body = request.get_json()
    token = login_user(body)
    print(token)
    if token == 'User does not exist':
        return jsonify(token), 404

    elif token == 'Incorrect password':
        return jsonify('Incorrect password'), 401

    elif token is None :
        return jsonify('Internal server error'), 500
    else:
        return jsonify(token), 200

#GET USER BY ID
@users.route("/", methods=['GET'])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    user = get_user_by_id(user_id['id'])
    if user is None:
        return jsonify('User not found'), 404

    return jsonify(user.serialize()), 200

#UPDATE USER INFO
@users.route('/modify', methods=['PUT'])
@jwt_required()
def modify_user_info():
    id_user = get_jwt_identity()
    body = request.get_json()
    return update_user_info(id_user["id"], body)

#DELETE USER
@users.route('/delete/<user_id_to_delete>', methods=['DELETE'])
@jwt_required()
def user_delete(user_id_to_delete):
    id_user = get_jwt_identity()
    user = get_user_by_id(id_user["id"]).serialize()
    delete_rel(user_id_to_delete)
    return delete_user(user["role"]["role_id"], user_id_to_delete)






