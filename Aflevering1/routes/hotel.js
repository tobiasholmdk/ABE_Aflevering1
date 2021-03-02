var express = require("express");
var router = express.Router();
var hotelcontroller = require("../controllers/hotelcontroller");
const authorize = require("../_helpers/authorize");
const roles = require("../_helpers/role");

router.post("/addhotel", authorize(roles.Manager), hotelcontroller.addHotel);

router.post("/addroom", authorize(roles.Manager), hotelcontroller.addRoom);
router.get("/freerooms", authorize(roles.User), hotelcontroller.getFreeRooms);

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
router.get("/gethotels", authorize(roles.Manager), hotelcontroller.getHotels);

module.exports = router;
