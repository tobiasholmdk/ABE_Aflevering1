var user = require ('../models/user');
const userService = require('../users/user.service');
//var hotel = require ('../models/hotelmodel');

/*
exports.login =  async function (req, res) {
  var result = await user.findOne({username: req.body.username, password: req.body.password});
  
  result ? res.json(user) : res.status(400).json({
    message: 'Username or password is incorrect'
  })

  res.status(200);
  res.json(result);    
};
*/

exports.login =  async function (req, res) {
    try {
      const user = await userService.authenticate(req.body);
      user ? res.json(user) : res.status(400).json({
          message: 'Username or password is incorrect'
      })
  } catch (err) {
      next(err)
  };
   
};





