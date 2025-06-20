from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from appCadastro.database import get_db_connection

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
        with conn.cursor() as cur:
            cur.execute(
                'INSERT INTO usuarios (login, senha_hash, tipo) VALUES (%s, %s, %s)',
                (login, senha_hash, tipo)
            )
            conn.commit()
    except Exception as e:
        print("Erro ao registrar usuário:", e)
        return jsonify({"msg": "Usuário já existe ou erro ao registrar"}), 400
    finally:
        conn.close()

    return jsonify({"msg": "Usuário registrado com sucesso"}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    login = data.get('login')
    senha = data.get('senha')

    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            cur.execute('SELECT * FROM usuarios WHERE login = %s', (login,))
            user = cur.fetchone()
    finally:
        conn.close()

    if user and check_password_hash(user['senha_hash'], senha):
        token = create_access_token(identity={"login": login, "tipo": user["tipo"]})
        return jsonify({"access_token": token, "tipo": user["tipo"]})
    else:
        return jsonify({"msg": "Usuário ou senha inválidos"}), 401
