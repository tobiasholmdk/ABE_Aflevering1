var express = require('express');
var router = express.Router();
var studentController = require('../controllers/student_controller')


/* GET add student form */
router.post('/add', studentController.addStudent);

module.exports = router;
