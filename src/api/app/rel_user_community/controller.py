from api.models.index import db, Rel_user_community,User
from api.app.community.controller import get_community_by_id
from flask import jsonify

#GET ALL THE COMMUNITIES
def getCommunities_by_user_id(user_id):
    try:
        community_list=[]
        rel= db.session.query(Rel_user_community).filter(Rel_user_community.user_id==user_id).all()
    
        if not rel: 
            return jsonify("There are no relations"),404
        else:
            for rel in rel:
                
                community_list.append(get_community_by_id(rel.community_id).serialize())
            return community_list

    except Exception as err:
        print('[ERROR GETTING COMMUNITY]: ', err)
        return None

#GET ACTIVE COMMUNITY  
def getCommunity_by_user_id(user_id):
    try:
        rel= db.session.query(Rel_user_community).filter(Rel_user_community.user_id==user_id).first()
        
        return rel.community_id

    except Exception as err:
        print('[ERROR GETTING COMMUNITY]: ', err)
        return None

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

def delete_rel(id_user_delete):
    try:
        if id_user_delete is None:
            return False
        Rel_user_community.query.filter(Rel_user_community.user_id == id_user_delete).delete()
        db.session.commit()
        return jsonify('Relación borrada'), 200
    
    except Exception as err:
        db.session.rollback()
        print('[ERROR DELETE REL: ]', err)
        return None
