module.exports.requireLogin = function (req,res,next){

  if(!req.signedCookies.mkt_u){
    res.redirect('../login');
    return;
  }
  next();
}

module.exports.checkLogged=function(req,res,next){
  if(req.signedCookies.mkt_u){
    res.redirect('../users');
    return;
  }
  next();
}
module.exports.checkLoggedIndex=function(req,res,next){
  if(req.signedCookies.mkt_u){
    res.locals.checkLogged=true;
  }
  next();
}