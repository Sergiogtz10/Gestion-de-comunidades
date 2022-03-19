from api.models.db import db


class Expenses(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    concept = db.Column(db.String(180), nullable=False)
    amount = db.Column(db.String(50), nullable=False)
    date = db.Column(db.String(80), nullable=False)
    community_id = db.Column(db.Integer, db.ForeignKey('community.id'))
    community = db.relationship('Community', backref='expenses')

    def __repr__(self):
        return '<Expenses %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "concept": self.concept,
            "amount": self.amount,
            "date": self.date,
            "community_id": self.community.serialize()
        }

