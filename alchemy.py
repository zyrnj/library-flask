from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import session

engine=create_engine()
DBsession=sessionmaker(engine)
dbsession=session(DBsession)