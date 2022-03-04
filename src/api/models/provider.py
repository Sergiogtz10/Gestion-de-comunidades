from api.models.db import db


class Progit chevider(db.Model):
    id = db.Column(db.Integer, primary_key=True)


    


    def __repr__(self):
        return '<Provider %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            
        }