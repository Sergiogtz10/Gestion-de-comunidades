from api.models.db import db
from api.models.user import User
from api.models.community import Community

class Rel_user_community(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer,db.ForeignKey('user.id'))
    community_id=db.Column(db.Integer,db.ForeignKey('community.id'))
    user=db.relationship('User',backref='rel_user_community')
    community=db.relationship('Community',backref='rel_user_community')


    def __repr__(self):
        return '<Rel_user_community %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id":self.user_id,
            "community_id":self.community_id
        }