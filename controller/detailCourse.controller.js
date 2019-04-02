var Users = require('../models/users.model');
var Courses = require('../models/courses.model');

module.exports.getDetailCourse= async function(req, res) {
  const data = await Courses.findOne({"name_course":"Tarra"});
  console.log(data);
  res.render('./user/detailCourse');
}