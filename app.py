from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from auth import auth_bp
from models import create_user_table

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'super-chave-secreta'  
jwt = JWTManager(app)
CORS(app)
app.register_blueprint(auth_bp)

# Cria tabela ao iniciar
create_user_table()

if __name__ == '__main__':
    app.run(debug=True)
