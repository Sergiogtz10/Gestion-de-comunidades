from api.models.db import db

class Bill(db.Model):
    id = db.Column(db.Integer, primary_key=True)
   
    


    def __repr__(self):
        return '<Bill %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            
        }