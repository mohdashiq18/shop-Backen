const mongoose = require('mongoose');

const DeviceHistorySchema = new mongoose.Schema({
  deviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true },
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  workHistroy: [{
    workType: [{ type: String,  required: true }],
    // workType: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WorkType', required: true }],
    workDate: { type: Date, default:Date.now() },
    price: { type: Number, required: true },
  }],
  customerName: { type: String, required: true },
  customerAadharNum: { type: String },
  customerAadharFront: { type: String },
  customerAadharBack: { type: String },
  customerConferenceVideo: { type: String },
  customerMobileNum: { type: String, required: true }
});

module.exports = mongoose.model('DeviceHistory', DeviceHistorySchema);
