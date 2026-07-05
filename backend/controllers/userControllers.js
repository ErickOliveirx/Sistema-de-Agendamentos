const {
    createUserService,
} = require("../services/userServices");

const createUser = async (req, res) => {

    const {
        nome,
        telefone,
        email,
        senha
    } = req.body;

    if (!nome || !telefone || !email || !senha) {
        return res
            .status(400)
            .send("Todos os campos obrigatórios devem ser preenchidos.");
    }

    if (!email.includes("@")) {
        return res
            .status(400)
            .send("Email inválido.");
    }

    if (senha.length < 8) {
        return res
            .status(400)
            .send("A senha deve ter pelo menos 8 caracteres.");
    }

    if (!/[A-Z]/.test(senha)) {
        return res
            .status(400)
            .send("A senha deve conter pelo menos uma letra maiúscula.");
    }

    if (!/[a-z]/.test(senha)) {
        return res
            .status(400)
            .send("A senha deve conter pelo menos uma letra minúscula.");
    }

    if (!/[0-9]/.test(senha)) {
        return res
            .status(400)
            .send("A senha deve conter pelo menos um número.");
    }

    try {

        const novoUsuario = await createUserService(req.body);

        return res.status(201).json(novoUsuario);

    } catch (error) {

        console.error(error);

        return res.status(500).send(error.message);
    }
};

module.exports = {
    createUser,
};