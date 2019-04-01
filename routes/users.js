var express = require('express');
var router = express.Router();
var controller= require('../controller/user.controller');

/* GET users listing. */
router.get('/', controller.userGet);

module.exports = router;
