const mongoose = require('mongoose');

// Define the schema for the Message model
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/  // Simple email validation regex
  },
  message: {
    type: String,
    required: true
  }
});

// Create and export the Message model
module.exports = mongoose.model('Message', messageSchema);
