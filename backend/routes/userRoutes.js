const express = require("express");

const router = express.Router();

const {
    createUser,
} = require("../controllers/userControllers");

router.post("/usuarios", createUser);

module.exports = router;