from api.models.index import db, Provider
from flask import jsonify

#roles ids
admin=1
owner=2

#GET ALL PROVIDERS 
def get_all_providers(community_id):
    provider_list=[]
    providers=db.session.query(Provider).all()
    
    if not providers: 
        return jsonify("There are no providers"),404
    else:
        for provider in providers:
            provider_list.append(provider.serialize())
        return jsonify(provider_list),200


#CREATE PROVIDER
def create_provider(body,community_id,role_id):
    try: 
        if verify_admin(role_id):
            new_provider=Provider(name=body["name"],service=body["service"],logo=body["logo"], community_id=community_id)
            db.session.add(new_provider)
            db.session.commit()
            return new_provider.serialize()

        else:
            return jsonify("User not authorized"),401

    except Exception as err:
        db.session.rollback()
        print('[ERROR]: ',err)
        return None

#MODIFY PROVIDER
def modify_provider(role_id,provider_id,body):
    try:
        if verify_admin(role_id):
            provider=Provider.query.get(provider_id)
            provider.name=body['name']
            provider.service=body['service']
            provider.logo=body['logo']
            db.session.commit()
            return provider.serialize(),200
        else:
            return jsonify("User not authorized"),401

    except Exception as err:
        db.session.rollback()
        print('[ERROR]: ',err)
        return None


#DELETE
def delete_provider(role_id,provider_id):
    try:
        if verify_admin(role_id):
            Provider.query.filter(Provider.id == provider_id).delete()
            db.session.commit()
            return jsonify("Borrado realizado"),200

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