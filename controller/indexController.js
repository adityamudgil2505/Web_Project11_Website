const postDB = require('../database/models/Posts');
module.exports = async(req,res)=>{
  const posts = await postDB.find({}).populate('author');
  console.log(req.session);
  res.render('index',{posts});
  //res.sendFile(path.resolve(__dirname,'pages/index.html'));
};