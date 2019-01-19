const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

/// save cmd  userSchema.
module.exports = mongoose.model('user',userSchema);