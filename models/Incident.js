const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
  date: Date,
  message: String,
  resolved: Boolean,
  service: String
});

module.exports = mongoose.model('Incident', IncidentSchema);