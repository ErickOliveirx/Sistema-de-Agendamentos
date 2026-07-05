const pool = require("../config/database");

const createUserService = async (dados) => {

    const {
        nome,
        telefone,
        email,
        senha
    } = dados;

    const tipo = "CLIENTE";

    const { rows } = await pool.query(
        "SELECT * FROM usuarios WHERE email = $1",
        [email]
    );

    if (rows.length > 0) {
        throw new Error("Email já cadastrado.");
    }

    const query = `
        INSERT INTO usuarios
        (
            nome,
            telefone,
            email,
            senha_hash,
            tipo
        )
        VALUES
        (
            $1,
            $2,
            $3,
            $4,
            $5
        )
        RETURNING *;
    `;

    const result = await pool.query(query, [
        nome,
        telefone,
        email,
        senha, // Depois será bcrypt
        tipo
    ]);

    return result.rows[0];
};

module.exports = {
    createUserService
};