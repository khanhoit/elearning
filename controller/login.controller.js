var Users = require('../models/users.model');

module.exports.loginGet= function(req, res, next) {
  res.render('./user/login');
}

module.exports.loginPost= async function(req, res, next) {
  let data = await Users.findOne({'email': req.body.email, 'password':req.body.password});
  
  if(!data){
    res.redirect('../login');
    return;
  }
  
  if(!req.signedCookies.mkt_u)
  res.cookie('mkt_u',req.body.email,{
    signed:true
  })
  res.redirect('../users');
  return;
}