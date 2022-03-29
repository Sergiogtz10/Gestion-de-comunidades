from flask import jsonify
from api.shared.encrypte_pass import encryp_pass, compare_pass
from api.models.index import db, User, Roles
from flask_jwt_extended import create_access_token
from api.app.activities.controller import verify_user_admin

def get_user_by_id(user_id):
    return User.query.get(user_id)

def register_owner(body):
    try:
        if body['password'] is None:
            return False
        if body['email'] is None:
            return False
        if body['first_name'] is None:
            return False
        if(body['last_name']) is None:
            return False
        if(body['flat_number']) is None:
            return False
        if(body['phone_number']) is None:
            return False

        owner_role = db.session.query(Roles).filter(Roles.role_id == 2).first()

        hash_pass = encryp_pass(body['password'])
        new_user = User(first_name=body['first_name'], last_name=body['last_name'], email=body['email'], password=hash_pass, role_id=owner_role.role_id, flat_number=body['flat_number'], phone_number=body['phone_number'])
        db.session.add(new_user)
        db.session.commit()
        return new_user.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR REGISTER USER]: ', err)
        return None

def register_admin(body):
    try:
        if body['password'] is None:
            return False
        if body['email'] is None:
            return False
        if body['first_name'] is None:
            return False
        if(body['last_name']) is None:
            return False
        if(body['phone_number']) is None:
            return False
        
        admin_role = db.session.query(Roles).filter(Roles.role_id == 1).first()
        hash_pass = encryp_pass(body['password'])
        new_user = User(first_name=body['first_name'], last_name=body['last_name'], email=body['email'], password=hash_pass, role_id=admin_role.role_id, phone_number=body['phone_number'])
        db.session.add(new_user)
        db.session.commit()
        return new_user.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR REGISTER USER]: ', err)
        return None

def login_user(body):
    try:
        if body['password'] is None:
            return False

        if body['email'] is None:
            return False

        user = db.session.query(User).filter(User.email == body['email']).first()
        if user is None:
            return 'User does not exist'

        validate_pass = compare_pass(body['password'], user.password)

        if validate_pass == False:
            return 'Incorrect password'

        new_token = create_access_token(identity={'id': user.id}, expires_delta=False)
        return { 'token': new_token }
        
    except Exception as err:
        print('[ERROR LOGIN]: ', err)
        return None

def update_user_info(user_id, body):
    try:
        if body is not None:
            user = get_user_by_id(user_id)
            print(user)
            user.first_name = body['first_name']
            user.last_name = body['last_name']
            user.phone_number = body['phone_number']
            user.email = body['email']
            db.session.commit()
            return user.serialize(), 200
        else:
            return jsonify('BAD REQUEST'), 400
    
    except Exception as err:
        db.session.rollback()
        print('[ERROR UPDATE USER: ]', err)
        return None

def delete_user(id_role, user_id_delete):
    try:
        if verify_user_admin(id_role):
            User.query.filter(User.id == user_id_delete).delete()
            db.session.commit()
            return jsonify("Usuario borrado correctamente")
        else:
            return jsonify("No estás autorizado")

    except Exception as err:
        db.session.rollback()
        print('[ERROR DELETE USER: ]', err)
        return None
