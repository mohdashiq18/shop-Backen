const mongoose = require('mongoose');

const WorkTypeSchema = new mongoose.Schema({
  workType: { type: String, required: true }
});

module.exports = mongoose.model('WorkType', WorkTypeSchema);
