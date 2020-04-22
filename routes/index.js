var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'indexExpress',link:'/',linkblog:'/blog',linkcart:'/cart',linkcategories:'/categories'});  
});


module.exports = router;
