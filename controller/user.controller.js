var Users = require('../models/users.model');
var Courses = require('../models/courses.model');
var detailCourses = require('../models/detailCourses.model');
var testCourses = require('../models/testCourse.model');

const uuidv3 = require('uuid/v3');


module.exports.userGet=async function(req, res) {
  const user =await Users.findOne({id: req.signedCookies.mkt_u});
  if(!user){
    res.render('../signup');
  }
  const myCourses = await Courses.find({id: {$in: user['mycourses']}})
  const kqTest= await testCourses.find({idUser: req.signedCookies.mkt_u});
  const oitKqTest =[];
  for (let index = 0; index < kqTest.length; index++) {
    const element = kqTest[index];
    const coursesTest = await Courses.findOne({id: element["idCourse"]});
    oitKqTest[index] = {"score":element["score"],"id":coursesTest.id,"name_course": coursesTest.name_course,"describe": coursesTest.describe,"img_baner":coursesTest.img_baner};
  }

  console.log('kqTest',oitKqTest);
  res.render('./user/index',{myCourses,user,oitKqTest});
}

module.exports.userPost=async function(req, res) {
  var userCheck = {};
  for (const key in req.body) {
    userCheck[key] = req.body[key].trim();
  }
  await Users.updateOne({id: req.signedCookies.mkt_u},userCheck);
  const user =await Users.findOne({id: req.signedCookies.mkt_u});
  const myCourses = await Courses.find({id: {$in: user['mycourses']}});

  const kqTest= await testCourses.find({idUser: req.signedCookies.mkt_u});
  const oitKqTest =[];
  for (let index = 0; index < kqTest.length; index++) {
    const element = kqTest[index];
    const coursesTest = await Courses.findOne({id: element["idCourse"]});
    oitKqTest[index] = {"score":element["score"],"id":coursesTest.id,"name_course": coursesTest.name_course,"describe": coursesTest.describe,"img_baner":coursesTest.img_baner};
  }

  res.render('./user/index',{myCourses,user,oitKqTest});

}