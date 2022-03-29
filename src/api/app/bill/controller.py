from api.models.index import db, Bill
from flask import jsonify

#admin and owner ids
admin=1
owner=2

#GET ALL BILLS
def get_all_bills():
    bill_list=[]
    bills=db.session.query(Bill)
    
    if not bills: 
        return jsonify("There are no incidents"),404
    else:
        for bill in bills:
            bill_list.append(bill.serialize())
        return jsonify(bill_list),200

#GET BILL
def get_bill_by_id(bill_id):
   
    return Bill.query.get(bill_id)


#CREATE BILLS
def create_bill(body,community_id,role_id):
    try: 
        if verify_admin(role_id):
            new_bill=Bill(amount=body["amount"],details=body["details"],provider_id=body["provider_id"], document=body["document"],community_id=community_id)
            db.session.add(new_bill)
            db.session.commit()
            return new_bill.serialize()

        else:
            return jsonify("User not authorized"),401

    except Exception as err:
        db.session.rollback()
        print('[ERROR]: ',err)
        return None



#MODIFY ONE BILL
def modify_bill(role_id,bill_id,body):
    try:
        if verify_admin(role_id):
            bill=Bill.query.get(bill_id)
            bill.amount=body['amount']
            bill.details=body['details']
            bill.date=body['date']
            db.session.commit()
            return bill.serialize(),200
        else:
            return jsonify("User not authorized"),401

    except Exception as err:
        db.session.rollback()
        print('[ERROR]: ',err)
        return None



def verify_admin(role_id):
    if role_id == admin:
        return True
    else:
        return False