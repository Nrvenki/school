const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// POST: Create a new appointment
router.post('/', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully!' });
  } catch (error) {
    console.error('Error saving appointment:', error);
    res.status(500).json({ error: 'Something went wrong. Try again.' });
  }
});

module.exports = router;
