from api.shared.encrypte_pass import encryp_pass, compare_pass
from api.models.index import db, User, Expenses, Providers
from flask_jwt_extended import create_access_token

def get_expenses_by_id():
    return Expenses.query.get()

def Create_expenses(body):
    try:
        if body['Concept'] is None:
            return False
        if body['Amount'] is None:
            return False
        if body['Date'] is None:
            return False
        if body['community_id'] is None:
            return False
        
        new_expenses = Expenses(Concept=body['Concept'], Amount=body['Amount'], Date = body['Date'])
        db.session.add(new_expenses)
        db.session.commit()
        return new_expenses.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR REGISTER EXPENSE]: ', err)
        return None

