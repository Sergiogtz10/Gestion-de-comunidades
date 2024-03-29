
import os
from flask_admin import Admin
from api.models.index import User, Roles, Community, Rel_user_community, Activities, Incident, Bill, Provider, Expenses
from api.models.db import db
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Roles, db.session))
    admin.add_view(ModelView(Community, db.session))
    admin.add_view(ModelView(Rel_user_community, db.session))
    admin.add_view(ModelView(Activities, db.session))
    admin.add_view(ModelView(Incident,db.session))
    admin.add_view(ModelView(Bill,db.session))
    admin.add_view(ModelView(Provider,db.session))
    admin.add_view(ModelView(Expenses, db.session))


    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))