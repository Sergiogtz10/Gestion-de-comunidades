from api.models.index import db, Incident
from flask import jsonify

#GET BY ID
def get_incident_by_id(incident_id):
    return Incident.query.get(incident_id)

#GET ALL
def get_incidents():
    incident_list=[]
    incidents=Incident.query.all()
    for incident in incidents:
        incident_list.append(incident.serialize())
    return jsonify(incident_list),200

#GET INCIDENTS BY USER ID
def get_owner_incidents(user_id):
    incident_list=[]
    incidents=Incident.query.all()
    for incident in incidents:
        if incident.user_id==user_id:
            incident_list.append(incident.serialize())
    return jsonify(incident_list),200

#CREATE COMMON INCIDENT
def create_common_incident(body,community_id):
    try: 
        new_incident=Incident(common=True,severity=body['severity'],description=body['description'],zone=body['zone'],community_id=community_id)
        db.session.add(new_incident)
        db.session.commit()
        return new_incident.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR DELETE]: ',err)
        return None

#CREATE OWNER INCIDENT
def create_owner_incident(body,community_id,user_id):
    try:

        new_incident=Incident(common=False,severity=body['severity'],description=body['description'],zone=body['zone'],user_id=user_id,community_id=community_id)
        db.session.add(new_incident)
        db.session.commit()
        return new_incident.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR]: ',err)
        return None

#DELETE
def delete_incident(incident_id):
    try:
        Incident.query.filter(Incident.id == incident_id).delete()
        db.session.commit()
        return jsonify("Borrado realizado"),200

    except Exception as err:
        db.session.rollback()
        print('[ERROR]: ',err)
        return None

#MODIFY INCIDENT    
def modify_incident(incident_id,body):
    try:
        incident=Incident.query.get(incident_id)
        incident.severity=body['severity']
        incident.description=body['description']
        incident.zone=body['zone']
        db.session.commit()
        return incident.serialize(),200

    except Exception as err:
        db.session.rollback()
        print('[ERROR]: ',err)
        return None
    