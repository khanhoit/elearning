var mongose = require('mongoose');

var courseSchema = new mongose.Schema({
  id:String,
  name_course:String,
  describe:String,
  img_baner:String
})
var course = mongose.model('course',courseSchema,'courses');

module.exports = course;