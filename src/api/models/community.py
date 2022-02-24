from api.models.db import db
class Community(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(250), unique=True, nullable=False)
    flats=db.Column(db.Integer)
    def __repr__(self): 
        return '<Community %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "address": self.address,
            "flats":self.flats
        }   