const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  petName: { type: String, required: true },
  petType: { type: String, enum: ['dog', 'cat', 'bird', 'rabbit', 'other'], required: true },
  ownerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true }, 
  time: { type: String, required: true },
  service: {
    type: String,
    enum: ['checkup', 'vaccination', 'grooming', 'dental', 'emergency'],
    required: true
  },
  notes: { type: String },
  agreeToTerms: { type: Boolean, required: true }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
