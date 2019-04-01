var express = require('express');
var router = express.Router();
var controller = require('../controller/courses.controller');


/* GET login listing. */
router.get('/',controller.coursesGet);

module.exports = router;
