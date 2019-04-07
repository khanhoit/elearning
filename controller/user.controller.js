var Users = require('../models/users.model');
var Courses = require('../models/courses.model');
var detailCourses = require('../models/detailCourses.model');

module.exports.userGet=async function(req, res) {
  const user =await Users.findOne({id: req.signedCookies.mkt_u});
  if(!user){
    res.render('../signup');
  }

  const myCourses = await Courses.find({id: {$in: user['mycourses']}})
  res.render('./user/index',{myCourses});
}