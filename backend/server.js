const express = require("express");

const pool = require("./config/database");

const homeRoutes = require("./routes/homeRoutes");
const userRoutes = require("./routes/userRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(homeRoutes);
app.use(userRoutes);
app.use(appointmentRoutes);

pool.connect()
    .then(() => {
        console.log("Banco de dados conectado com sucesso!");
    })
    .catch((error) => {
        console.log("Erro ao conectar no banco:", error);
    });

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});