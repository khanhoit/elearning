var mongose = require('mongoose');

var detailCoursesSchema = new mongose.Schema({
  id:String,
  data:Array
})
var detailCourses = mongose.model('detailCourses',detailCoursesSchema,'detailCourses');

module.exports = detailCourses;