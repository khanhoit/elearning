var express = require('express');
var router = express.Router();
var controller = require('../controller/search.controller');

router.get('/',controller.searchGet);

module.exports = router;