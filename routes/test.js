var express = require('express');
var router = express.Router();
var controller = require('../controller/test.controller');

// test 
router.get('/',controller.testGet);

module.exports = router;
