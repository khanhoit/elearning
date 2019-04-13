var mongose = require('mongoose');

var testCoursesSchema = new mongose.Schema({
  idUser:String,
  idCourse:String,
  score:Array
})
var testCourse = mongose.model('testCourse',testCoursesSchema,'testCourse');

module.exports = testCourse;
