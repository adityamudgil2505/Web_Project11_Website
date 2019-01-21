const db = require('../database/models/user');
module.exports = (req, res, next)=>{
  db.findById(req.session.userId, (err, user)=>{
    if(err || !user){ return res.redirect('/');}
    next();
  })
}