module.exports = (req, res)=>{
  if(req.session.userId)
  { return res.render('create');
  }
  else{
    res.render('/auth/login');
  }
  //res.sendFile(path.resolve(__dirname,'pages/post.html'));
}