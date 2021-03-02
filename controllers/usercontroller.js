var user = require("../models/user");
const jwt = require("jsonwebtoken");
const roles = require("../_helpers/role");
const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.changeroleManager = async function (req, res) {
  var result = await user.findOne({ username: req.body.username });
  result.role = roles.Manager;
  var result = await result.save();
  res.status(200);
  res.json(result);
};

exports.changeroleBack = async function (req, res) {
  var result = await user.findOne({ username: req.body.username });
  result.role = roles.User;
  var result = await result.save();
  res.status(200);
  res.json(result);
};

exports.login = async function (req, res) { 

  const result = await user.findOne({
    username: req.body.username,
  });

  if(req.body.password == result.password)
  {
    //Some users where seeded before we hashed passwords
    var correctLogin = result.password;
  }
  else {
    var correctLogin = await bcrypt.compare(req.body.password, result.password);
  }  

  if (correctLogin) {
    const token = jwt.sign(
      { sub: result.id, role: result.role },
      process.env.ACCESS_TOKEN_SECRET
    ); 

    res.status(200);
    res.json({ token });
  } else {
    res
      .status(400)
      .json({
        message: "Username or password is incorrect " + req.body.username,
      });
  }  
};

exports.adduser = async function (req, res) {
  
  const salt = await bcrypt.genSalt(saltRounds);  
  var bcryptPassword = await bcrypt.hash(req.body.password, salt);    
  
  const newUser = {
    username: req.body.username,
    password: bcryptPassword
  };  

  try {
    var result = await user.create(newUser);
  } catch (e) {
    console.log(e);
  }

  if (result) {
    res.status(200);
    res.json(result);
  } else {
    res.status(400).json({
      message:
        "Both username and password is required. Username must be unique",
    });
  }
};

exports.changePassWords = async function (req, res) {
  var doc = await user.findOne({password: "pass"});
  
  doc.password = "testPass";
  var result = await doc.save();
  res.status(200);
  res.json(result);
};