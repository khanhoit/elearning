var Users = require('../models/users.model');

module.exports.loginGet= function(req, res, next) {
  res.render('./user/login');
}

module.exports.loginPost= async function(req, res, next) {
  let data = await Users.findOne({'email': req.body.email, 'password':req.body.password});
  console.log(data);
  if(!data){
    res.render('./user/login',{
      error:"mật khẩu hoặc email không đúng"        
    });
    return;
  }
  
  res.cookie('mkt_u',data.id,{
    signed:true
  })
  res.redirect('../users');
  return;
}