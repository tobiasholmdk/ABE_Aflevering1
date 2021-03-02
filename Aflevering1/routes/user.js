var express = require('express');
var router = express.Router();
var usercontroller = require('../controllers/usercontroller');
const authorize = require('../_helpers/authorize');
const roles = require('../_helpers/role');

router.post('/login', usercontroller.login);
router.post('/adduser', usercontroller.adduser);
router.post('/changerole', authorize(roles.Admin), usercontroller.changeroleManager);
router.post('/changeroleUser', authorize(roles.Admin), usercontroller.changeroleBack);
module.exports = router;