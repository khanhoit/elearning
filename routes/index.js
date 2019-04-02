var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('res.locals.checkLogged: ',res.locals);
  res.render('index', { checkLogged: res.locals.checkLogged });
});

module.exports = router;
