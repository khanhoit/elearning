
var detailCourses = require('../models/detailCourses.model');

module.exports.getLearnTry= async function(req, res) {
  
  const {data} = await detailCourses.findOne({"id":req.query.idCourse})
  console.log(data);
  res.render('learnTry',{data});
}