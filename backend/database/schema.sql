CREATE TABLE agendamentos (
    id SERIAL PRIMARY KEY,
    cliente VARCHAR(100) NOT NULL,
    barbeiro VARCHAR(100) NOT NULL,
    servico VARCHAR(100) NOT NULL,
    data_agendamento DATE NOT NULL,
    horario TIME NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);