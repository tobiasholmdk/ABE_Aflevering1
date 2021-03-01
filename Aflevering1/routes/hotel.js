var express = require('express');
var router = express.Router();
var hotelcontroller = require('../controllers/hotelcontroller')

//const userService = require('./user.service');
const authorize = require('../_helpers/authorize')
const Role = require('../_helpers/role');




router.post('/addhotel', authorize(Role.Manager), hotelcontroller.addHotel);


router.post('/addroom', hotelcontroller.addRoom);
router.post('/freerooms',hotelcontroller.getFreeRooms);

/* GET add student form */

/**
 * @swagger
 * /hotel/gethotels:
 *   get:
*      summary: Retrieve the list of students
*      responses:
*        200:
*          description: Retrieve a list of students. Can be used something...
*          content: 
*            application/json:
*              schema:
*                type: object
*                properties:
*                  id:string
*/
router.get('/gethotels', hotelcontroller.getHotels);

module.exports = router;
