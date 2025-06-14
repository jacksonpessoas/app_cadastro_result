from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from database import get_db_connection

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    login = data.get('login')
    senha = data.get('senha')
    tipo = data.get('tipo', 'comum')

    senha_hash = generate_password_hash(senha)

    conn = get_db_connection()
    try:
        conn.execute(
            'INSERT INTO usuarios (login, senha_hash, tipo) VALUES (?, ?, ?)',
            (login, senha_hash, tipo)
        )
        conn.commit()
    except:
        return jsonify({"msg": "Usuário já existe"}), 400
    finally:
        conn.close()

    return jsonify({"msg": "Usuário registrado com sucesso"}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    login = data.get('login')
    senha = data.get('senha')

    conn = get_db_connection()
    user = conn.execute('SELECT * FROM usuarios WHERE login = ?', (login,)).fetchone()
    conn.close()

    if user and check_password_hash(user['senha_hash'], senha):
        token = create_access_token(identity={"login": login, "tipo": user["tipo"]})
        return jsonify({"access_token": token, "tipo": user["tipo"]})
    else:
        return jsonify({"msg": "Usuário ou senha inválidos"}), 401
