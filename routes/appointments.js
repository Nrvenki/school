// routes/appointments.js
const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

// POST: Create an appointment
router.post('/', async (req, res) => {
  const { doctorName, specialty, patientName, email, phone, date, time } = req.body;

  if (!doctorName || !specialty || !patientName || !email || !phone || !date || !time) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newAppointment = new Appointment({
      doctorName,
      specialty,
      patientName,
      email,
      phone,
      date,
      time,
    });

    await newAppointment.save();

    res.status(201).json({ message: 'Appointment booked successfully!', appointment: newAppointment });
  } catch (err) {
    console.error('Error booking appointment:', err);
    res.status(500).json({ error: 'Failed to book appointment' });
  }
});

module.exports = router;
