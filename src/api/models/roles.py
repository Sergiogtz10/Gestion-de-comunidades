from api.models.db import db

class Roles(db.Model):
    role_id = db.Column(db.Integer, primary_key=True)
    role_name = db.Column(db.String(100), unique=False)

    def __repr__(self):
        return '<Roles %r>' % self.role_name

    def serialize(self):
        return {
            "role_id": self.role_id,
            "role_name": self.role_name
        }