from api.models.index import db, Community

#GET
def get_community_by_id(community_id):
    return Community.query.get(community_id)

#REGISTER COMMUNITY
def register_community(body):
    new_community=Community(address=body['address'], flats=body['flats'])
    db.session.add(new_community)
    db.session.commit()
    return new_community.serialize()

