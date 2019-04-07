
var detailCourses = require('../models/detailCourses.model');

module.exports.getLearnTry= async function(req, res) {
  let {data} = await detailCourses.findOne({"id":req.query.idCourse});
  data= data.slice(0,4);
  res.render('learnTry',{data});
}