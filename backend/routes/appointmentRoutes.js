const express = require("express");

const router = express.Router();

const {
    createAppointment,
    getAppointments
} = require("../controllers/appointmentController");

router.post("/agendamentos", createAppointment);

router.get("/agendamentos", getAppointments);

module.exports = router;

