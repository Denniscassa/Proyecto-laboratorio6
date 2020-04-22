var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('categories', { title: 'categoriesExpress',link:'/',linkblog:'/blog',linkcategories:'/categories', linkcart:'/cart'});
  
});


module.exports = router;
