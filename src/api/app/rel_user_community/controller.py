from api.models.index import db, Rel_user_community
from flask import jsonify

def create_rel(community_id, user_id):
    try:
        if community_id is None:
            return False
        if user_id is None:
            return False

        new_rel=Rel_user_community(user_id=user_id,community_id=community_id)
        db.session.add(new_rel)
        db.session.commit()
        return new_rel.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR REGISTER USER]: ', err)
        return None

