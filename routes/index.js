var express = require('express');
var router = express.Router();
var controller = require('../controller/index.controller');
/* GET home page. */
router.get('/',  controller.indexGet);

module.exports = router;
