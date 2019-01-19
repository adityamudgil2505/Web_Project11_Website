const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: 
  { type: String,
    required: true,
    unique: true
  },
  email: 
  { type: String,
    required: true,
    unique: true
  },
  password: String
});

userSchema.pre('save',function(next){
  const user = this;
  bcrypt.hash(user.password,10,function(err,encrypted){
    user.password=encrypted;
    next();
  });
});

module.exports = mongoose.model('user',userSchema);