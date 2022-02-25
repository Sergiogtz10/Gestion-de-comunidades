from api.models.db import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False, default=True)
    role_name = db.Column(db.String(100), db.ForeignKey('roles.role_name'))
    roles = db.relationship('Roles', backref='user')

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "role": self.role_name
        }


class Roles(db.Model):
    role_name = db.Column(db.String(100), primary_key=True, unique=False)

    def __repr__(self):
        return '<Roles %r>' % self.role_name

    def serialize(self):
        return {
            "role_name": self.role_name
        }