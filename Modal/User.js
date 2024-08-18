const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: {type:String,required:true},
  email: { type: String, unique: true, required: true },
  password: {type:String,unique: true,required:true},
  phone: {type:String,required:true},
  isVendor:{type:Boolean,default:false},
  isAdmin:{type:Boolean,default:false},
  token: {type:String,default:null},
  isSubscribed: {type:Boolean,default:false},
  createdDate: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema);
