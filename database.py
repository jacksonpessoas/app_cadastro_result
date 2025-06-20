import psycopg2
from psycopg2.extras import RealDictCursor

# Configurações de conexão com o PostgreSQL
DB_CONFIG = {
    "host": "localhost",
    "port": 5432,
    "dbname": "app_cadastro_result",
    "user": "postgres",
    "password": "6599145"
}

def get_db_connection():
    try:
        conn = psycopg2.connect(**DB_CONFIG, cursor_factory=RealDictCursor)
        return conn
    except Exception as e:
        print("Erro ao conectar com o banco de dados:", e)
        return None
