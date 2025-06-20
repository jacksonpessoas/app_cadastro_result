from appCadastro.database import get_db_connection

def create_user_table():
    conn = get_db_connection()
    if conn is None:
        print("Não foi possível conectar ao banco de dados.")
        return

    try:
        with conn.cursor() as cur:
            cur.execute("""
                CREATE TABLE IF NOT EXISTS usuarios (
                    id SERIAL PRIMARY KEY,
                    login TEXT UNIQUE NOT NULL,
                    senha_hash TEXT NOT NULL,
                    tipo TEXT DEFAULT 'comum'
                );
            """)
            conn.commit()
            print("Tabela 'usuarios' verificada/criada com sucesso.")
    except Exception as e:
        print("Erro ao criar tabela 'usuarios':", e)
    finally:
        conn.close()


def create_pesquisa_table():
    conn = get_db_connection()
    if conn is None:
        print("Não foi possível conectar ao banco de dados.")
        return

    try:
        with conn.cursor() as cur:
            cur.execute("""
                CREATE TABLE IF NOT EXISTS pesquisas (
                    id SERIAL PRIMARY KEY,
                    nome TEXT,
                    idade INTEGER,
                    sexo TEXT,
                    bairro TEXT,
                    escolaridade TEXT,
                    trabalho TEXT,
                    renda TEXT,
                    atual_gov TEXT,
                    candidato TEXT,
                    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            """)
            conn.commit()
            print("Tabela 'pesquisas' verificada/criada com sucesso.")
    except Exception as e:
        print("Erro ao criar tabela 'pesquisas':", e)
    finally:
        conn.close()


def create_tables():
    create_user_table()
    create_pesquisa_table()
