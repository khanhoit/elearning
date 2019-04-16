var courseModel = require('../models/courses.model');

module.exports.coursesGet= async function(req, res) {
  const data = await courseModel.find();
  res.render('./user/courses',{data});
}