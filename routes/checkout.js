var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('checkout', { title: 'checkoutExpress',link:'/',linkblog:'/blog',linkcart:'/cart',linkcheckout:'/checkout'});
  
});


module.exports = router;
