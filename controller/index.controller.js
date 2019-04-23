var Courses = require('../models/courses.model');

module.exports.indexGet=async function(req, res) {
  const dataCourse = (await Courses.find()).slice(0,3);
  res.render('index', { checkLogged: res.locals.checkLogged, dataCourse });
}


