var Courses = require('../models/courses.model');

module.exports.allCoursesGet=async function(req, res) {
  const allCourse = await Courses.find();
  res.render('./courses', {allCourse});
}