const express = require("express");

const router = express.Router();

const {
    createAppointment,
    getAppointments,
    deleteAppointment
} = require("../controllers/appointmentController");

router.post("/agendamentos", createAppointment);

router.get("/agendamentos", getAppointments);

router.delete("/agendamentos/:id", deleteAppointment);

module.exports = router;
