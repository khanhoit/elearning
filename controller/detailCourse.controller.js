var Users = require('../models/users.model');
var Courses = require('../models/courses.model');
var detailCourses = require('../models/detailCourses.model');



module.exports.getDetailCourse= async function(req, res) {
  
  const {data} = await detailCourses.findOne({"id":req.query.idCourse})
  let mycoursesUser =await Users.findOne({id: req.signedCookies.mkt_u});

  if(mycoursesUser["mycourses"].length===0 || !~mycoursesUser["mycourses"].indexOf(req.query.idCourse)){
    mycoursesUser["mycourses"][mycoursesUser["mycourses"].length]=req.query.idCourse;
    console.log(mycoursesUser["mycourses"]);
    let ok= await Users.updateOne({id: req.signedCookies.mkt_u},{"mycourses": mycoursesUser["mycourses"]});
    console.log("change");
  }else{
    console.log("no change");
  }
  
  res.render('./user/detailCourse',{data});
}