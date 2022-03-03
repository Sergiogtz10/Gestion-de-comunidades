from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.activities.controller import create_new_activity, delete_activity, verify_user
from api.app.user.controler import get_user_by_id
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

activity = Blueprint('activity', __name__)

@activity.route('/create/<community_id>', methods=['POST'])
def new_activity_create(community_id):
    body = request.get_json()
    created_activity = create_new_activity(body, community_id)
    if created_activity is None:
        return jsonify('Internal server error'), 500
    elif created_activity == False:
        return jsonify('Bad request'), 400
    else:
        return jsonify(created_activity), 201

@activity.route('/delete/<activity_id>', methods=['DELETE'])
@jwt_required()
def activity_delete(activity_id):
    id_from_user = get_jwt_identity()
    user = get_user_by_id(id_from_user['id']).serialize()
    print(user)
    if verify_user(user['role']['role_id']):
        
        return delete_activity(activity_id), 200
    else:
        return 'No estás autorizado', 401