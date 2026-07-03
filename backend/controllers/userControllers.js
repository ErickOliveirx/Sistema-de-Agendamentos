const {
    createUserService,
} = require("../services/userService");

    const {
        nome,
        telefone,
        email,
        senha
    } = req.body; 

   if (
    !nome ||
    !telefone ||
    !email ||
    !senha
) {
    return res
        .status(400)
        .send("Todos os campos obrigatórios devem ser preenchidos.");
}

    else if (!email.includes("@")) {
        return res
            .status(400)
            .send("Email inválido.");
    } 
    else if (senha.length < 8) {
        return res
            .status(400)
            .send("A senha deve ter pelo menos 8 caracteres.");
    }
    else if (!/[A-Z]/.test(senha)) {
        return res
            .status(400)
            .send("A senha deve conter pelo menos uma letra maiúscula.");
    }
    else if (!/[a-z]/.test(senha)) {
        return res
            .status(400)
            .send("A senha deve conter pelo menos uma letra minúscula.");
    }
    else if (!/[0-9]/.test(senha)) {
        return res
            .status(400)
            .send("A senha deve conter pelo menos um número.");
    }
    
    try {
        const novoUsuario = await createUserService(req.body); 
        res.status(201).json(novoUsuario);
    } catch (error) 

    {
        res.status(500).json({ error: error.message });
    }; 


module.exports = {
    createUser,
};