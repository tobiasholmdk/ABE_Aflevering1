var express = require('express');
var router = express.Router();
var hotelcontroller = require('../controllers/hotelcontroller')


/* GET add student form */
router.post('/addhotel', hotelcontroller.addHotel);
router.post('/addroom', hotelcontroller.addRoom);
router.get('/gethotels', hotelcontroller.getHotels);

module.exports = router;
