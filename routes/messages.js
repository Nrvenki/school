const express = require('express');
const router = express.Router();
const Message = require('../models/Message');  // Your Message model

// POST route for contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create new Message document
    const newMessage = new Message({
      name,
      email,
      message
    });

    // Save the message to the database
    await newMessage.save();

    // Send a success response
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
