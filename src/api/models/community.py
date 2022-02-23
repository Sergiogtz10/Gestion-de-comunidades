from api.models.db import db

class Community(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(250), unique=True, nullable=False)
    incident_id = db.Column(db.Integer,db.ForeignKey('indicents.id'))
    expense_id = db.Column(db.Integer,db.ForeignKey('expenses.id'))
    incident=db.relationship('Incident',backref='community')
    expense=db.relationship('Expense',backref='community')
    


    def __repr__(self):
        return '<Community %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "address": self.address
        }