const mongoose = require('mongoose');
const post = require('./database/models/Posts');
mongoose.connect('mongodb://localhost/node-js-test-node');

post.create({
  titlse:"Hi I am tejaas",
  description:"Mota teja",
  content:"Full chill"
},(err,post)=>{
  console.log(err, post);
});

// post.find({},(err,post)=>{
//   console.log(err,post);
// });