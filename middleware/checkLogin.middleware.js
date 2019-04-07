var Users = require('../models/users.model');

async function checkMkt_u (obj){
  const data= await Users.findOne(obj);
  if(data){
    return true;
  }
  return false;
} 

module.exports.requireLogin =async function (req,res,next){
  if(!req.signedCookies.mkt_u|!await checkMkt_u({id:req.signedCookies.mkt_u})){
    res.redirect('../login');
    return;
  }
  next();
}

module.exports.checkLogged=async function(req,res,next){
  if(await checkMkt_u({id:req.signedCookies.mkt_u})){
    res.redirect('../users');
    return;
  }
  next();
}

module.exports.checkLoggedIndex=async function(req,res,next){
  if(await checkMkt_u({id:req.signedCookies.mkt_u})){
    res.locals.checkLogged=true;
  }
  next();
}