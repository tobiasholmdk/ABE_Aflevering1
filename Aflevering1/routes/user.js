var express = require('express');
var router = express.Router();
var usercontroller = require('../controllers/usercontroller');

router.get('/login', usercontroller.login);
//router.post('/adduser', usercontroller.adduser);
//router.get('/getHotels', usercontroller.getHotels);

module.exports = router;