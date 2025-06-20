from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from appCadastro.auth import auth_bp
from appCadastro.routes import routes_bp  # <--- IMPORTANTE
from appCadastro.models import create_tables

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'super-chave-secreta'
jwt = JWTManager(app)
CORS(app)

app.register_blueprint(auth_bp)
app.register_blueprint(routes_bp)  # <--- NOVA ROTA

# Cria tabelas ao iniciar
create_tables()

if __name__ == '__main__':
    app.run(debug=True)
