var express = require('express');
var router = express.Router();
var hotelcontroller = require('../controllers/hotelcontroller')


/* GET add student form */
router.post('/addhotel', hotelcontroller.addHotel);

module.exports = router;
