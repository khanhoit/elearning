var Users = require('../models/users.model');
var Courses = require('../models/courses.model');
var detailCourses = require('../models/detailCourses.model');

module.exports.testGet=async function(req, res) {
  let difCourse = (await Courses.find()).filter(item=>item.id!==req.query.idCourse);
  console.log(difCourse);
  difCourse= difCourse.slice(0,4);
  res.render('test',{difCourse});
}