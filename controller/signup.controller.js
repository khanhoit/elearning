var Users = require('../models/users.model');

module.exports.signupGet= function(req, res) {
  res.render('./user/signup');
}

module.exports.signupPost= function(req, res) {
  var user = {};
  for (const key in req.body) {
      user[key] = req.body[key].trim();
  }
  for (const key in user) {
    if(!user[key].length){
      res.redirect('./signup');
      return;
    }
  }
  if(user.password!==user.cfPassword){
    res.render('./user/signup',{
        error:"password khac confirmpassword"        
    });
    return;
  }
  res.cookie('mkt_u',user.email,{
    signed:true
  })

  user.mycourses=[];
  Users.create(user);
  res.redirect('./users');
  return;
}