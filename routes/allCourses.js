var express = require('express');
var router = express.Router();
var controller = require('../controller/allCourses.controller');


/* GET login listing. */
router.get('/',controller.allCoursesGet);

module.exports = router;
