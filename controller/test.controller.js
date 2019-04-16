var Users = require('../models/users.model');
var Courses = require('../models/courses.model');
var detailCourses = require('../models/detailCourses.model');
var testCourses = require('../models/testCourse.model');

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
  
  difCourse= difCourse.slice(0,3);
  res.render('test',{difCourse,data,dataSetTest});
}

function myGetTime(){
  var date = new Date();
  var month = date.getMonth();
  var day = date.getDay();
  var year = date.getYear();
  var hour= date.getHours();
  var min= date.getMinutes();
  return `${min}:${hour} - ${day}/${month}/${year}`;
}
module.exports.testPost=async function(req, res) {
  const kqTest = req.body.resultTest;
  console.log("kqTest",kqTest);
  let itemTestCourse = {'idUser': req.signedCookies.mkt_u,'idCourse': req.query.idCourse};
  let dataTestCourse= await testCourses.findOne(itemTestCourse);
  if(dataTestCourse){
    dataTestCourse["score"].push({kqTest,"date": myGetTime()});
    console.log("score",dataTestCourse);
    await testCourses.updateOne(itemTestCourse,dataTestCourse);
  }else{
    await testCourses.create({...itemTestCourse,score:[{kqTest, "date": myGetTime()}]});
  }
  res.json({ check: 'true' });
}