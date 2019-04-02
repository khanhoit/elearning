var mongose = require('mongoose');

var userSchema = new mongose.Schema({
  email:String,
  password:String,
  name:String,
  phone:String,
  mycourses:Array
})

var User = mongose.model('User',userSchema,'users');

module.exports = User;