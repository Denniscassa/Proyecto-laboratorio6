var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('blog', { title: 'blogExpress', link:'/',linkblog:'/blog',linkcart:'/cart' });
});
 
module.exports = router;
