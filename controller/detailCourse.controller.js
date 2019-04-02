module.exports.getDetailCourse=function(req, res) {
  // console.log('cookie\n',req.cookie);
  // console.log('signedcookies\n',req.signedCookies);
  res.render('./user/detailCourse');
}