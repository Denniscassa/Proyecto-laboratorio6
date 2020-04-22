var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/** variables de ruta */
var womanRouter = require('./routes/woman');
var manRouter = require('./routes/man');
var lookbookRouter = require('./routes/lookbook');
var blogRouter = require('./routes/blog');
var contactRouter = require('./routes/contact');

var cartRouter = require('./routes/cart');
var categoriesRouter = require('./routes/categories');
var checkoutRouter = require('./routes/checkout');
var productRouter = require('./routes/product');

var almacenRouter = require('./routes/almacen')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blog', blogRouter);

/**asignacion y uso de las variables de ruta */
app.use('/woman', womanRouter);
app.use('/man', manRouter);
app.use('/lookbook', lookbookRouter);
app.use('/contact', contactRouter);
app.use('/cart', cartRouter);
app.use('/categories', categoriesRouter);
app.use('/checkout', checkoutRouter);
app.use('/product', productRouter);

app.use('/almacen', almacenRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {  
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
