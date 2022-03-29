from api.models.db import db

class Activities(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.String(100), nullable=False)
    time = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(250), nullable=False)
    severity = db.Column(db.String(80), nullable=False)
    community_id = db.Column(db.Integer, db.ForeignKey('community.id'))
    community = db.relationship('Community', backref='activities')

    def __repr__(self):
        return '<Activities %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "day": self.day,
            "time": self.time,
            "description": self.description,
            "severity": self.severity,
            "community": self.community.serialize()
        }