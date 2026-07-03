const pool = require("../config/database");

const createUserService = async (dados) => {

    const {
        nome,
        email,
        senha
    } = dados;

   
    const { rows } = await pool.query(
        "SELECT * FROM usuarios WHERE email = $1",
        [email]
    );

    if (rows.length > 0) {
        throw new Error("Email já cadastrado.");
    }

    
    const result = await pool.query(
        `
        INSERT INTO usuarios
        (
    nome,
    telefone,
    email,
    senha,
    tipo,
    especialidade || null
]
        VALUES ($1, $2, $3)
        RETURNING *
        `,
        [nome, email, senha]
    );

    return result.rows[0];
};

module.exports = {
    createUserService,
};