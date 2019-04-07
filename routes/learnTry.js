var express = require('express');
var router = express.Router();
var controller = require('../controller/learnTry.controller');

/* GET home page. */
router.get('/',controller.getLearnTry);

module.exports = router;
