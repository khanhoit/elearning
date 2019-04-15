var Courses = require('../models/courses.model');
var detailCourses = require('../models/detailCourses.model');

module.exports.getLearnTry= async function(req, res) {
  let {data} = await detailCourses.findOne({"id":req.query.idCourse});
  data= data.slice(0,4);

  let difCourse = (await Courses.find()).filter(item=>item.id!==req.query.idCourse)
  difCourse= difCourse.slice(0,3);

  res.render('learnTry',{data, difCourse});
}