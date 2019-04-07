var Users = require('../models/users.model');
const uuidv3 = require('uuid/v3');

module.exports.signupGet= function(req, res) {
  res.render('./user/signup');
}

module.exports.signupPost=async function(req, res) {
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
  // check xem có trùng email trong dbs ko
  if(await Users.findOne({"email":user.email})){
    res.render('./user/signup',{
      error:"email đã có tài khoản  "        
    });
    return;
  }

  user.mycourses=[];
  const nameSpace = user.password+user.email+"";
  user.id=uuidv3(nameSpace,process.env.KEY_FOR_UUID);
  await Users.create(user);
  
  res.cookie('mkt_u',user.id,{
    signed:true
  })
  res.redirect('./users');
  return;
}