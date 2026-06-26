const {
    createAppointmentService,
    getAppointmentsService
} = require("../services/appointmentService");

cde
const createAppointment = async (req, res) => {

    const {
        cliente,
        barbeiro,
        data_agendamento,
        horario,
        servico
    } = req.body;

    if (
        !cliente ||
        !barbeiro ||
        !data_agendamento ||
        !horario ||
        !servico
    ) {

        return res
            .status(400)
            .send("Todos os campos obrigatórios devem ser preenchidos!");
    }

   

    try {

        const novoAgendamento =
            await createAppointmentService(req.body);

        return res.status(201).json(novoAgendamento);

    } catch (error) {

        console.log(error);

        return res
            .status(500)
            .send("Erro ao criar agendamento.");
    }
};

const getAppointments = async (req, res) => {

    try {

        const agendamentos =
            await getAppointmentsService();

        return res.status(200).json(agendamentos);

    } catch (error) {

        console.log(error);

        return res
            .status(500)
            .send("Erro ao buscar agendamentos.");
    }
};

module.exports = {
    createAppointment,
    getAppointments
};

