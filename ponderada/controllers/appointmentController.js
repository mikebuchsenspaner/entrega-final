const Appointment = require('../models/appointmentModel');

exports.list = async (req, res) => {
  try {
    const appointments = await Appointment.getAppointments();
    res.json(appointments);
  } catch (err) {
    console.error('Erro ao listar:', err);
    res.status(500).json({ error: err.message });
  }
};
