const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  userId:{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  aadhar: { type: String, required: true },
  shopNumber: { type: String, required: true },
  pan: { type: String, required: true },
  address: { type: String, required: true },
  shopLocation: {
    type: { type: String, enum: ['Point'] },
    coordinates: { type: [Number] }
  }
});

VendorSchema.index({ shopLocation: '2dsphere' });

module.exports = mongoose.model('Vendor', VendorSchema);
