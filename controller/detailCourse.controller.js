var Users = require('../models/users.model');
var Courses = require('../models/courses.model');
var detailCourses = require('../models/detailCourses.model');

module.exports.getDetailCourse= async function(req, res) {
  const course =await Courses.find({"id":req.query.idCourse});
  const {data} = await detailCourses.findOne({"id":req.query.idCourse});
  let difCourse = (await Courses.find()).filter(item=>item.id!==req.query.idCourse)
  difCourse= difCourse.slice(0,3);

  let mycoursesUser =await Users.findOne({id: req.signedCookies.mkt_u});

  if(mycoursesUser["mycourses"].length===0 || !~mycoursesUser["mycourses"].indexOf(req.query.idCourse)){
    mycoursesUser["mycourses"][mycoursesUser["mycourses"].length]=req.query.idCourse;
    console.log(mycoursesUser["mycourses"]);
    let ok= await Users.updateOne({id: req.signedCookies.mkt_u},{"mycourses": mycoursesUser["mycourses"]});
    console.log("change");
  }else{
    console.log("no change");
  }

  res.render('detailCourse',{data,course,difCourse});
}