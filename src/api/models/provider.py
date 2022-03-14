from api.models.db import db
from api.models.community import Community


class Provider(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(120), nullable=False)
    service=db.Column(db.String(120))
    logo= db.Column(db.String, nullable=True)
    community_id=db.Column(db.Integer,db.ForeignKey('community.id'))
    community=db.relationship(Community,backref="Provider")


    def __repr__(self):
        return '<Provider %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name":self.name,
            "service":self.service
        }