var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('man', { title: 'manExpress',link:'/',linkman:'/man'});
  
});


module.exports = router;
