const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  mood: { type: String, required: true },
  sleepHours: { type: Number },
  exercised: { type: Boolean },
  symptoms: { type: String },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Journal', journalSchema);
