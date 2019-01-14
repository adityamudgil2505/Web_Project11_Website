const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
  title: String,
  description: String,
  content: String
});

const post = mongoose.model('Post',postSchema);

module.exports = post;