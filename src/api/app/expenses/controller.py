from flask import jsonify
from api.models.index import db, Expenses
from api.app.community.controller import get_community_by_id


def get_expense_by_id(id):
    return Expenses.query.get(id)


def create_new_expense(body, community_id):
    try:
        if body['concept'] is None:
            return False
        if body['amount'] is None:
            return False
        if body['date'] is None:
            return False
        

        expenses_community = get_community_by_id(community_id)

        new_expense = Expenses(concept=body['concept'], amount=body['amount'], date=body['date'], community_id=expenses_community.id)
        db.session.add(new_expense)
        db.session.commit()
        return new_expense.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR CREATE EXPENSE: ]', err)
        return None


def delete_expense(role_id, id_expense):
    try:
        if verify_user_admin(role_id):
            Expenses.query.filter(Expenses.id == id_expense).delete()
            db.session.commit()
            return jsonify("Gasto eliminado con éxito"), 200
        else:
            return jsonify("No estás autorizado para su eliminación"), 401

    except Exception as err:
        db.session.rollback()
        print('[ERROR DELETE EXPENSE]: ', err)
        return None


def modify_expense(role_id, id_expense, body):
    try:
        if verify_user_admin(role_id):
            expense_to_modify = get_expense_by_id(id_expense)
            expense_to_modify.concept = body['concept']
            expense_to_modify.amount = body['amount']
            expense_to_modify.date = body['date']
            db.session.commit()
            return expense_to_modify.serialize(), 200
        else:
            return jsonify('No estás autorizado para realizar cambios'), 401

    except Exception as err:
        db.session.rollback()
        print('[ERROR MODIFY EXPENSE: ]', err)
        return None

def get_expenses():
    try:
        all_expenses = []
        expenses= db.session.query(Expenses).all()
        if not expenses:
            return jsonify('Todavia no se ha añadido ningun gasto')
        else:
            for expense in expenses:
                all_expenses.append(expense.serialize())
            return jsonify(all_expenses), 200

    except Exception as err:
        return jsonify('[ERROR GET EXPENSES]: ', err)


def verify_user_admin(role_id):
    if role_id == 1:
        return True
    else:
        return False