const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  source: { type: String, default: 'Website Form' },
  status: { type: String, enum: ['New', 'Contacted', 'Converted', 'Lost'], default: 'New' },
  notes: [String]
}, { timestamps: true });

module.exports = mongoose.model('Lead', LeadSchema);