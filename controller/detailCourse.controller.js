var Users = require('../models/users.model');
var Courses = require('../models/courses.model');
var detailCourses = require('../models/detailCourses.model');

module.exports.getDetailCourse= async function(req, res) {
  const course =await Courses.find({"id":req.query.idCourse});
  const {data} = await detailCourses.findOne({"id":req.query.idCourse});
  let difCourse = (await Courses.find()).filter(item=>item.id!==req.query.idCourse)
  difCourse= difCourse.slice(0,3);
  res.render('detailCourse',{data,course,difCourse});
}