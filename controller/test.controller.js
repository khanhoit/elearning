var Users = require('../models/users.model');
var Courses = require('../models/courses.model');
var detailCourses = require('../models/detailCourses.model');

function createDataTest(numberMax, preNumber){
  let dataRow=[];
		while(true){
			dataRow = Array.from({length:4},()=>Math.floor(Math.random()*numberMax))
			const set1 = new Set(dataRow);
			if (set1.size==dataRow.length) {
				break;
			}
		}
		return dataRow;
}
module.exports.testGet=async function(req, res) {
  let difCourse = (await Courses.find()).filter(item=>item.id!==req.query.idCourse);
  const {data} = await detailCourses.findOne({"id":req.query.idCourse});
  const dataSetTestRow = Array.from({length:10});
  const dataSetTest = dataSetTestRow.map(()=>createDataTest(data.length,12));
  console.log('test',dataSetTest);

  difCourse= difCourse.slice(0,3);
  console.log(data);
  res.render('test',{difCourse,data,dataSetTest});
}