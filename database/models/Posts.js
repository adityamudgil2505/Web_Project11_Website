const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
  title: String,
  description: String,
  content: String,
  image: String,
  dateAt:{
    type: Date,
    default: new Date()
  },
  username: String
});

const post = mongoose.model('Post',postSchema);

module.exports = post;