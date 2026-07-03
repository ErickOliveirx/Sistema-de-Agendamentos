const pool = require("../config/database");

const createAppointmentService = async (dados) => {

    const {
        cliente,
        barbeiro,
        data_agendamento,
        horario,
        servico,
        telefone
    } = dados;

    const query = `
        INSERT INTO agendamentos
        (
            cliente,
            barbeiro,
            data_agendamento,
            horario,
            servico,
            telefone
        )
        VALUES
        ($1, $2, $3, $4, $5, $6)
        RETURNING *
    `;

    const valores = [
        cliente,
        barbeiro,
        data_agendamento,
        horario,
        servico,
        telefone
    ];

    const resultado = await pool.query(query, valores);

    return resultado.rows[0];
};

const getAppointmentsService = async () => {

    const resultado = await pool.query(
        "SELECT * FROM agendamentos ORDER BY id ASC"
    );

    return resultado.rows;
};

const deleteAppointmentService = async (id) => {
    const resultado = await pool.query( 
        "DELETE FROM agendamentos WHERE id = $1 RETURNING *", 
        [id]
    );

    return resultado.rows[0];
}

module.exports = {
    createAppointmentService,
    getAppointmentsService,
    deleteAppointmentService
};