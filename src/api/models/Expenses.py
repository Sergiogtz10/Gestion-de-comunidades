from api.models.db import db
from api.models.community import Community

class Expenses(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Concept = db.Column(db.String(180), unique=True, nullable=False)
    Amount = db.Column(db.float)
    Date = db.Column(db.string(80), unique=True, nullable=False)
    community_id = db.Column(db.Integer,db.ForeignKey('community.id'))

    def __repr__(self):
        return '<Expenses %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "Concept": self.Concept,
            "Amount": self.Amount,
            "Date": self.Date,
            "community_id": self.community_id
        }

