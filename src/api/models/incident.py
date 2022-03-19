from api.models.db import db
from api.models.community import Community
from api.models.user import User
from api.models.bill import Bill

class Incident(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    common=db.Column(db.Boolean(),nullable=False)
    severity=db.Column(db.String(50))
    status=db.Column(db.String(50))
    description=db.Column(db.String(250), nullable=False)
    zone=db.Column(db.String(50),nullable=False)
    user_id=db.Column(db.Integer,db.ForeignKey('user.id'))
    user=db.relationship(User,backref="incident")
    bill_id=db.Column(db.Integer,db.ForeignKey('bill.id'))
    bill=db.relationship(Bill,backref="incident")
    community_id=db.Column(db.Integer,db.ForeignKey('community.id'))
    community=db.relationship(Community,backref="incident")
   
    


    def __repr__(self):
        return '<Incident %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "severity":self.severity,
            "description":self.description,
            "status":self.status,
            "zone":self.zone,
            "user_id":self.user_id,
            "bill_id":self.bill_id,
            "community_id":self.community_id

        }