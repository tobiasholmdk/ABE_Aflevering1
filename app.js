var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc"); // import swaggerJSDoc from 'swagger-jsdoc';
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./models/db");
var studentRouter = require("./routes/student");
var hotelRouter = require("./routes/hotel");
var userRouter = require("./routes/user");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for Assignment 1 - Hotel Management",
    version: "1.0.0",
  },   
  servers: [{url: 'http://localhost:3000/'}],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      }
    }
  },
  security: [{
    bearerAuth: []
  }]
    
};
const options = {
  swaggerDefinition,
  //Paths to files containing OpenAPI definitions
  apis: ["./routes/*.js"],
};

var app = express();
const swaggerSpec = swaggerJSDoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use("/student", studentRouter);
app.use("/hotel", hotelRouter);
app.use("/user", userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json("Error: " + (err.message || "Internal server error"));
});

module.exports = app;
