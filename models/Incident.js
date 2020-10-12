const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
  date: Date,
  message: String,
  resolved: Boolean,
  service: String,
  createdAt: { type: Date, expires: 1728000 }
}, { timestamps: true });

module.exports = mongoose.model('Incident', IncidentSchema);
