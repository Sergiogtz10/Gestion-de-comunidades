from flask import jsonify
from api.models.index import db, Activities
from api.app.community.controller import get_community_by_id
from api.app.user.controler import get_user_by_id


def get_activity_by_id(id):
    return Activities.query.get(id)

def create_new_activity(body, community_id):
    try:
        if body['day'] is None:
            return False
        if body['time'] is None:
            return False
        if body['description'] is None:
            return False
        if body['severity'] is None:
            return False

        activities_community = get_community_by_id(community_id)

        new_activity = Activities(day=body['day'], time=body['time'], description=body['description'], severity=body['severity'], community_id=activities_community.id)
        db.session.add(new_activity)
        db.session.commit()
        return new_activity.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR CREATE ACTIVITY: ]', err)
        return None

def delete_activity(id_activity):
    try:
        Activities.query.filter(Activities.id == id_activity).delete()
        db.session.commit()
        return jsonify('Actividad Borrada')

    except Exception as err:
        db.session.rollback()
        print('[ERROR DELETE ACTIVITY: ]', err)
        return None



def verify_user(role_id):
    if role_id == 1:
        return True
    else:
        return False
