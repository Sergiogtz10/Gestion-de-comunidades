from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.activities.controller import create_new_activity, delete_activity, modify_activity, get_activities_by_community_id
from api.app.user.controller import get_user_by_id
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

activity = Blueprint('activity', __name__)

#CREATE NEW ACTIVITY
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

#DELETE ACTIVITY
@activity.route('/delete/<activity_id>', methods=['DELETE'])
@jwt_required()
def delete(activity_id):
    user_id = get_jwt_identity()
    user = get_user_by_id(user_id["id"]).serialize()
    return delete_activity(user["role"]["role_id"], activity_id)

#MODIFY ACTIVITY
@activity.route('/modify/<activity_id>', methods=['PUT'])
@jwt_required()
def activity_modify(activity_id):
    user_id = get_jwt_identity()
    user = get_user_by_id(user_id["id"]).serialize()
    body = request.get_json()
    return modify_activity(user['role']['role_id'], activity_id, body)

#GET ACTIVITY BY COMMUNITY ID
@activity.route('/<community_id>', methods=['GET'])
def activity_by_community_get(community_id):
    return get_activities_by_community_id(community_id)