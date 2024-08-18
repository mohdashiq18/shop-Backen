const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tillDate: { type: Date, default:null },
  isSubscribed: { type: Boolean, default:false },
  subscribeDate: { type: Date, default: null},
  transactionId: { type: String, default:null },
  createdAt:{type:String,default:Date.now}
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
