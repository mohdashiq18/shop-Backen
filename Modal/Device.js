const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
  deviceName: { type: String, required: true },
  deviceImei: [{ type: String, unique: true }],
  createDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Device', DeviceSchema);
