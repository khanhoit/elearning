var express = require('express');
var router = express.Router();
var controller = require('../controller/signup.controller');


/* GET login listing. */
router.get('/',controller.signupGet);
router.post('/',controller.signupPost);

module.exports = router;
