from api.models.index import db, Incident
from flask import jsonify


#GET ALL COMMON INCIDENTS
def get_common():
    incident_list=[]
    incidents=db.session.query(Incident).filter(Incident.common==True)
    
    if not incidents: 
        return jsonify("There are no incidents"),404
    else:
        for incident in incidents:
            incident_list.append(incident.serialize())
        return jsonify(incident_list),200



#GET INCIDENTS BY USER ID
def get_owner_incidents(user_id):
    incident_list=[]
    incidents=db.session.query(Incident).filter(Incident.user_id==user_id)
    
    if not incidents: 
        return jsonify("There are no incidents"),404
    else:
        for incident in incidents:
            incident_list.append(incident.serialize())
        return jsonify(incident_list),200

#CREATE COMMON INCIDENT
def create_incident(body,community_id,user_id,common):
    try: 
        new_incident=Incident(common=common,severity=body['severity'],description=body['description'],zone=body['zone'],community_id=community_id, user_id=user_id)
        db.session.add(new_incident)
        db.session.commit()
        return new_incident.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR DELETE]: ',err)
        return None

#DELETE
def delete_incident(role_id,incident_id):
    try:
        if verify_admin(role_id):
            Incident.query.filter(Incident.id == incident_id).delete()
            db.session.commit()
            return jsonify("Borrado realizado"),200

        else:
            return jsonify("User not authorized"),401

    except Exception as err:
        db.session.rollback()
        print('[ERROR]: ',err)
        return None

#MODIFY INCIDENT    
def modify_incident(role_id,incident_id,body):
    try:
        if verify_admin(role_id):
            incident=Incident.query.get(incident_id)
            incident.severity=body['severity']
            incident.description=body['description']
            incident.zone=body['zone']
            db.session.commit()
            return incident.serialize(),200
        else:
            return jsonify("User not authorized"),401

    except Exception as err:
        db.session.rollback()
        print('[ERROR]: ',err)
        return None


def verify_admin(role_id):
    if role_id == 1:
        return True
    else:
        return False
    