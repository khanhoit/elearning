var courseModel = require('../models/courses.model');

module.exports.coursesGet= async function(req, res) {
  
  // console.log('/user/courses \n',req.signedCookies);

  const data = await courseModel.find();
  res.render('./user/courses',{
    data
  });
}