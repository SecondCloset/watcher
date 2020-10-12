const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
  date: Date,
  message: String,
  resolved: Boolean,
  service: String,
  createdAt: {
    type: Date,
    index: {
      expires: '20d'
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('Incident', IncidentSchema);
