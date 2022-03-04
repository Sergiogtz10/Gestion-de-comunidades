from api.models.db import db
from api.models.provider import Provider

class Bill(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    amount= db.Column(db.Float, nullable=False)
    details=db.Column(db.String,nullable=False)
    provider_id= db.Column(db.Integer,db.ForeignKey('provider.id'))
    provider=db.relationship(Provider,backref="bill")




    def __repr__(self):
        return '<Bill %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "amount":self.amount,
            "details":self.details,
            
        }