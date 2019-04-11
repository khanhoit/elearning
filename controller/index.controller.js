var Users = require('../models/users.model');
var Courses = require('../models/courses.model');
var detailCourses = require('../models/detailCourses.model');

module.exports.indexGet=async function(req, res) {
  const dataCourse = (await Courses.find()).slice(0,2);
  console.log(dataCourse);
  res.render('index', { checkLogged: res.locals.checkLogged, dataCourse });
}