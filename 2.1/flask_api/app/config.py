import os

class Config:
    BASE_DIR = os.path.abspath(os.path.dirname(__file__))
    INSTANCE_DIR = os.path.join(BASE_DIR, "instance")


    if not os.path.exists(INSTANCE_DIR):
        os.makedirs(INSTANCE_DIR)

    DATABASE_FILE = os.path.join(INSTANCE_DIR, "tasks.db")
    SQLALCHEMY_DATABASE_URI = f'sqlite:///{DATABASE_FILE}'
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'some-default-secret-key'
    SQLALCHEMY_TRACK_MODIFICATIONS = False



