module.exports.userGet= function(req, res) {
  console.log(req.query);
  res.render('./user/index');
}