var courseModel = require('../models/courses.model');

function check(item,q){
    console.log("khanh",item);
    return item.name_course.toLowerCase().indexOf(q)>-1||item.describe.toLowerCase().indexOf(q)>-1;
}

module.exports.searchGet= async function(req, res) {
    const data = await courseModel.find();
    const q =req.query.q.toLowerCase().trim();
    if(q.length==0){
        res.render('search',{"rs":[]});
    }
    const rs = data.filter((item)=>check(item,q));
    console.log(rs);
    res.render('search',{rs});
}