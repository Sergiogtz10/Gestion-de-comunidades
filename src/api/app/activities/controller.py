from api.models.index import db, Activities, Community


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

        community = db.session.query(Community).filter(Community.id == community_id).first()

        new_activity = Activities(day=body['day'], time=body['time'], description=body['description'], severity=body['severity'], community_id=community.id)
        db.session.add(new_activity)
        db.session.commit()
        return new_activity.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR CREATE ACTIVITY: ]', err)
        return None
