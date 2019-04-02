module.exports.requireLogin = function (req,res,next){

  console.log(req.signedCookies);
  if(!req.signedCookies.mkt_u){
    res.redirect('../login');
  }
  next();
}

module.exports.checkLogged=function(req,res,next){
  if(req.signedCookies.mkt_u){
    res.redirect('../users');
  }
  next();
}
module.exports.checkLoggedIndex=function(req,res,next){
  if(req.signedCookies.mkt_u){
    res.locals.checkLogged=true;
  }
  next();
}