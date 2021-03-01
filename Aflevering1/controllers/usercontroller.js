var user = require ('../models/user');
const userService = require('../users/user.service');

exports.login =  async function (req, res) {
    try {
      const user = await userService.authenticate(req.body);
      if(user) {
        res.status(200);
        res.json(user)

      } else {
        res.status(400).json({
          message: 'Username or password is incorrect'})
      }
  } catch (err) {
      next(err)
  };   
};

/*
exports.adduser =  async function (req, res) {
  const newUser = {
    username: req.body.username,
    password: req.body.password
  };

  try {
    var result = await user.create(newUser);    
  } 
  catch (e) { console.log(e) }

  if(result) {
    res.status(200);
    res.json(result);
  } else { 
    res.status(400).json({
    message: 'Both username and password is required. Username must be unique'})
  }
};
*/







