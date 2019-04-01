var express = require('express');
var router = express.Router();
var controller = require('../controller/login.controller');


/* GET login listing. */
router.get('/',controller.loginGet);

module.exports = router;
