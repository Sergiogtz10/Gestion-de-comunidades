from api.models.db import db
from api.models.community import Community

class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    community_id=db.Column(db.Integer,db.ForeignKey('community.id'))
    community=db.relationship(Community,backref="expense")
    


    def __repr__(self):
        return '<Expense %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            
        }