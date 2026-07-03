
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha_hash TEXT NOT NULL,
    tipo VARCHAR(20) NOT NULL,
    ativo BOOLEAN DEFAULT TRUE,
    disponivel BOOLEAN DEFAULT TRUE,
    especialidade VARCHAR(100),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE servicos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    duracao_minutos INTEGER NOT NULL,
    ativo BOOLEAN DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE agendamentos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER NOT NULL REFERENCES usuarios(id),
    barbeiro_id INTEGER NOT NULL REFERENCES usuarios(id),
    servico_id INTEGER NOT NULL REFERENCES servicos(id),
    data_hora TIMESTAMP NOT NULL,
    status VARCHAR(20) DEFAULT 'AGENDADO',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pagamentos (
    id SERIAL PRIMARY KEY,
    agendamento_id INTEGER NOT NULL REFERENCES agendamentos(id),
    valor DECIMAL(10,2) NOT NULL,
    metodo_pagamento VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'AGUARDANDO_PAGAMENTO',
    codigo_transacao VARCHAR(100),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    data_hora_pagamento TIMESTAMP
);

