var Users = require('../models/users.model');
var Courses = require('../models/courses.model');
var detailCourses = require('../models/detailCourses.model');
const uuidv3 = require('uuid/v3');


module.exports.userGet=async function(req, res) {
  const user =await Users.findOne({id: req.signedCookies.mkt_u});
  if(!user){
    res.render('../signup');
  }
  
  const myCourses = await Courses.find({id: {$in: user['mycourses']}})
  console.log(user);
  res.render('./user/index',{myCourses,user});
}


module.exports.userPost=async function(req, res) {
  var userCheck = {};
  for (const key in req.body) {
    userCheck[key] = req.body[key].trim();
  }
  await Users.updateOne({id: req.signedCookies.mkt_u},userCheck);
  const user =await Users.findOne({id: req.signedCookies.mkt_u});
  const myCourses = await Courses.find({id: {$in: user['mycourses']}});
  
  res.render('./user/index',{myCourses,user});

}