var express = require('express');
var router = express.Router();
var controller = require('../controller/detailCourse.controller');


/* GET login listing. */
router.get('/',controller.getDetailCourse);

module.exports = router;