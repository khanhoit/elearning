var express = require('express');
var router = express.Router();
var controller = require('../controller/about.controller');


/* GET login listing. */
router.get('/',controller.aboutGet);

module.exports = router;
