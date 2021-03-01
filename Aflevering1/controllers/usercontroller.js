var user = require ('../models/user');
const jwt = require('jsonwebtoken');

exports.login =  async function (req, res) {
  const result = await user.findOne({username: req.body.username, password: req.body.password});

  if(result) 
  { 
    const token = jwt.sign({sub: result.id, role: result.role}, process.env.ACCESS_TOKEN_SECRET);
    //const {password, ...userWithoutPassword} = result;
    
    res.status(200);
    res.json({token});
  }
  else 
  {
    res.status(400).json({ message: 'Username or password is incorrect'})
  }    
};

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








