from flask import Blueprint, request, jsonify
from flask import render_template
from appCadastro.database import get_db_connection
from flask_jwt_extended import jwt_required

routes_bp = Blueprint('routes', __name__)

@routes_bp.route('/')
def home():
    return render_template('index.html')


@routes_bp.route('/home2')
# @jwt_required()
def home2():
    return render_template('home2.html')

@routes_bp.route('/cadastro')
# @jwt_required()
def cadastro():
    return render_template('cadastro.html')


@routes_bp.route('/pesquisa', methods=['POST'])
# @jwt_required()
def salvar_pesquisa():
    data = request.get_json()

    nome = data.get('nome')
    idade = data.get('idade')
    sexo = data.get('sexo')
    bairro = data.get('bairro')
    escolaridade = data.get('escolaridade')
    trabalho = data.get('trabalho')
    renda = data.get('renda')
    atual_gov = data.get('atualGov')
    candidato = data.get('candidato')

    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            cur.execute("""
                INSERT INTO pesquisas (nome, idade, sexo, bairro, escolaridade, trabalho, renda, atual_gov, candidato)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
            """, (nome, idade, sexo, bairro, escolaridade, trabalho, renda, atual_gov, candidato))
            conn.commit()
            return jsonify({"msg": "Dados da pesquisa salvos com sucesso"}), 201
    except Exception as e:
        print("Erro ao salvar pesquisa:", e)
        return jsonify({"msg": "Erro ao salvar dados"}), 500
    finally:
        conn.close()


