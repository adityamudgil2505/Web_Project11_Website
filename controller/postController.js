const postDB = require('../database/models/Posts');
module.exports = async(req,res)=>{
  const post =await postDB.findById(req.params.id).populate('author');
  console.log(post);
  res.render('post',{post});
  //res.sendFile(path.resolve(__dirname,'pages/post.html'));
};