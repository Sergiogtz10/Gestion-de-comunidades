from api.models.db import db
from api.models.bills import Bills

class Providers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(120), unique=True, nullable=False)
    Product = db.Column(db.String(120), unique=False, nullable=False)
    bills_id = db.Column(db.Integer,db.ForeignKey('bills.id'))
  

    def __repr__(self):
        return '<Providers %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "Name": self.Name,
            "Product": self.Product,
            "bills_id": self.bills_id
        }