const user = require('../database/models/user');
module.exports = (req, res)=>{
  user.create(req.body,(err,post)=>{
    if(err)
    { return res.redirect('/auth/register');
    }
    res.redirect('/');
  });
};