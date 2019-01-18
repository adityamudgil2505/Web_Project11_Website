const postDB = require('../database/models/Posts');
const path = require('path');
module.exports = (req,res)=>{
  const {image} = req.files;
  console.log();
  image.mv(path.resolve(__dirname,'../public/posts/', image.name),(err)=>{
    postDB.create({
      ...req.body,
      image:'/posts/'+image.name
    }, (err, post)=>{});
    res.redirect('/');
  });
};