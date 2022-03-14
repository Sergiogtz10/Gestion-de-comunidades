from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.user.controller import register_owner, register_admin, login_user, get_user_by_id
from api.app.rel_user_community.controller import create_rel
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

users = Blueprint('users', __name__)

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

@users.route('/login', methods=['POST'])
def user_login():
    body = request.get_json()
    token = login_user(body)
    print(token)
    if token == 'user not exist':
        return jsonify(token), 404

    elif token == 'pass not iqual':
        return jsonify('user or password incorrect'), 401

    elif token is None :
        return jsonify('Internal server error'), 500
    else:
        return jsonify(token), 200

@users.route("/", methods=['GET'])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    user = get_user_by_id(user_id['id'])
    if user is None:
        return jsonify('user not found'), 404

    return jsonify(user.serialize()), 200