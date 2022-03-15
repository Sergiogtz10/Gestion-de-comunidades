from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.activities.controller import create_new_expense, delete_expense, modify_expense, get_expense_by_community_id
from api.app.user.controler import get_user_by_id
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

expenses = Blueprint('expenses', __name__)

#Create expense
@expenses.route('/create/<community_id>', methods=['POST'])
def new_expense_create(community_id):
    body = request.get_json()
    created_expense = create_new_expense(body, community_id)
    if created_expense is None:
        return jsonify('Internal server error'), 500
    elif created_expense == False:
        return jsonify('Bad request'), 400
    else:
        return jsonify(created_expense), 201

#delete expense
@expenses.route('/delete/<expense_id>', methods=['DELETE'])
@jwt_required()
def delete(expense_id):
    user_id = get_jwt_identity()
    user = get_user_by_id(user_id["id"]).serialize()
    return delete_expense(user["role"]["role_id"], expense_id)

#Modify expenses
@expenses.route('/modify/<expense_id>', methods=['PUT'])
@jwt_required()
def expense_modify(expense_id):
    user_id = get_jwt_identity()
    user = get_user_by_id(user_id["id"]).serialize()
    body = request.get_json()
    return modify_expense(user['role']['role_id'], expense_id, body)

#Method get expenses by community
@expenses.route('/<community_id>', methods=['GET'])
def expense_by_community_get(community_id):
    return get_expense_by_community_id(community_id)