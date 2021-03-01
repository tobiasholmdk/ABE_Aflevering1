var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');




require('./models/db');
var studentRouter = require('./routes/student');
var hotelRouter = require('./routes/hotel');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', hotelRouter);
app.use('/student', studentRouter);
app.use('/hotel', hotelRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json('Error: ' + (err.message || 'Internal server error'));
});

module.exports = app;
