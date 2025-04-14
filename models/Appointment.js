const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorName: { type: String, required: true },
  specialty: { type: String, required: true },
  patientName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
