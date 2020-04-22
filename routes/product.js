var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('product', { title: 'womanExpress',link:'/',linkblog:'/blog',linkproduct:'/product'});
  
});


module.exports = router;
