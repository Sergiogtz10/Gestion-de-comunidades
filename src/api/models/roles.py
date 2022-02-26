from api.models.db import db

class Roles(db.Model):
    role_name = db.Column(db.String(100), primary_key=True, unique=False)

    def __repr__(self):
        return '<Roles %r>' % self.role_name

    def serialize(self):
        return {
            "role_name": self.role_name
        }