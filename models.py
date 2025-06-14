from database import get_db_connection

### Função para criar a tabela de usuários no banco de dados###

def create_user_table():
    conn = get_db_connection()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            login TEXT UNIQUE NOT NULL,
            senha_hash TEXT NOT NULL,
            tipo TEXT NOT NULL CHECK(tipo IN ('admin', 'comum'))
        );
    ''')
    conn.commit()
    conn.close()
    
    
### Função para criar a tabela de cadastro no banco de dados###
    
def create_cadastro_table():
    conn = get_db_connection()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS cadastro (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            sobrenome TEXT NOT NULL,
            dt_nasc TEXT NOT NULL,
            cep TEXT NOT NULL,
            rua TEXT NOT NULL,
            numero TEXT NOT NULL,
            complemento TEXT, 
            bairro TEXT NOT NULL,
            cidade TEXT NOT NULL,
            uf TEXT NOT NULL CHECK(uf IN ('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO')),
            estado_civil TEXT NOT NULL CHECK(estado_civil IN ('solteiro', 'casado', 'divorciado', 'viuvo')),
            rg TEXT NOT NULL,
            cpf TEXT NOT NULL UNIQUE,
            naturalidade TEXT NOT NULL CHECK(naturalidade IN ('brasileiro', 'estrangeiro')),
            escolaridade TEXT NOT NULL CHECK(escolaridade IN ('Ensino Fundamental', 'Ensino Médio', 'Ensino Técnico', 'Ensino Superior', 'Pós-Graduação', 'Mestrado', 'Doutorado')),
            curso TEXT,
            profissao TEXT
        );
    ''')
    conn.commit()
    conn.close()
    
    ##Função para criar a tabela de responsável no banco de dados##

def create_responsavel_tables():
    conn = get_db_connection()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS responsavel (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            grau_parentesco TEXT NOT NULL CHECK(grau_parentesco IN ('Mãe', 'Pai', 'Tio(a)', 'Esposo', 'Filho(a)', 'Outro')),
            nome_parentesco TEXT NOT NULL,
            sobrenome_parentesco TEXT NOT NULL,
            dt_nasc_parentesco TEXT NOT NULL,
            rg_parentesco TEXT NOT NULL,
            orgaorg_parentesco TEXT NOT NULL,
            dtrg_parentesco TEXT NOT NULL,
            cpf_parentesco TEXT NOT NULL,
            naturalidade_parentesco TEXT NOT NULL CHECK(naturalidade_parenteco IN ('brasileiro', 'estrangeiro')),
            cep_parentesco TEXT NOT NULL,
            rua_parentesco TEXT NOT NULL,
            numero_parentesco TEXT NOT NULL,
            bairro_parentesco TEXT NOT NULL,
            cidade_parentesco TEXT NOT NULL,
            uf_parentesco TEXT NOT NULL CHECK(uf_parentesco IN ('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO')),
            FOREIGN KEY (cadastro_id) REFERENCES cadastro(id) ON DELETE CASCADE
        );
    ''')
    conn.commit()
    conn.close()
    
    
### Função para criar a tabela de filiação no banco de dados###

def create_filiacao_tables():
    conn = get_db_connection()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS filiacao (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            mae TEXT NOT NULL,
            contato_mae TEXT NOT NULL,
            pai TEXT NOT NULL,
            contato_pai TEXT NOT NULL,
            nome_conjuge TEXT NOT NULL,
            tem_filhos TEXT NOT NULL CHECK(tem_filhos IN ('Sim', 'Não')),
            quantidade_filhos INTEGER,
            FOREIGN KEY (cadastro_id) REFERENCES cadastro(id) ON DELETE CASCADE
      );
    ''')
    conn.commit()
    conn.close()
    
    ### Função para criar a tabela internamento ###
    
def create_internamento_tables():
    conn = get_db_connection()
    conn.execute(''' 
        CREATE TABLE IF NOT EXISTS internamento (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            internada TEXT NOT NULL CHECK(internada IN ('Sim', 'Não')),
            qnt_vezes NUMBER,
            instituição TEXT,
            respon_instituição TEXT,
            contato_instituição TEXT,
            end_instituição TEXT,
            bairro_instituição TEXT,
            cidade_instituição TEXT,
            FOREIGN KEY (cadastro_id) REFERENCES cadastro(id) ON DELETE CASCADE
        );
                 
                 
                 
                 
                 
                 
    ''')    
        
        
        
        
        
        ##
    
    
    create_user_table()
    create_cadastro_table()
    print("Tabelas criadas com sucesso!")