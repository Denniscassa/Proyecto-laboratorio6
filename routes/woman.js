var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('woman', { title: 'womanExpress',link:'/',linkwoman:'/woman'});
  
});


module.exports = router;
