from api.models.index import db, Rel_user_community
from flask import jsonify

def create_rel(community_id, user_id):
    new_rel=Rel_user_community(user_id=user_id,community_id=community_id)
    db.session.add(new_rel)
    db.session.commit()
    return new_rel.serialize()

