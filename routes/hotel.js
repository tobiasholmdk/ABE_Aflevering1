var express = require("express");
var router = express.Router();
var hotelcontroller = require("../controllers/hotelcontroller");
const authorize = require("../_helpers/authorize");
const roles = require("../_helpers/role");

/* POST add hotel form */
/**
 * @swagger
 * /hotel/addhotel:
 *   post:
 *      summary: Manager can add new hotel
 *      requestBody:
 *       content:
 *         application/json:
 *           schema:      # Request body contents
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *             example:   # Sample object
 *               name: New Hotel
 *               address: Hotel Street
 *      responses:
 *        200:
 *          description: OK
 */
router.post("/addhotel", authorize(roles.Manager), hotelcontroller.addHotel);

/* POST add hotel form */
/**
 * @swagger
 * /hotel/addroom:
 *   post:
 *      summary: Manager can add rooms to a hotel
 *      requestBody:
 *       content:
 *         application/json:
 *           schema:      # Request body contents
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               roomNumber:
 *                 type: integer
 *               beds:
 *                 type: integer
 *               reserved:
 *                 type: boolean
 *             example:   # Sample object
 *               name: New Hotel
 *               roomNumber: 69
 *               beds: 420
 *               reserved: false
 *      responses:
 *        200:
 *          description: OK
 */
router.post("/addroom", authorize(roles.Manager), hotelcontroller.addRoom);

/* GET Free rooms */
/**
 * @swagger
 * /hotel/freerooms:
 *   post:
 *      summary: Retrieve the list of vacant rooms
 *      requestBody:
 *       content:
 *         application/json:
 *           schema:      # Request body contents
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:   # Sample object
 *               name: Some Hotel name
 *      responses:
 *        200:
 *          description: Retrieve the list of vacant rooms. Can be used something...
 */
router.post("/freerooms", authorize(roles.User), hotelcontroller.getFreeRooms);

/* GET add hotels form */
/**
 * @swagger
 * /hotel/gethotels:
 *   get:
 *      summary: Retrieve the list of hotels
 *      responses:
 *        200:
 *          description: Retrieve a list of hotels. Can be used something...
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:string
 */
router.get("/gethotels", authorize(roles.Manager), hotelcontroller.getHotels);

module.exports = router;
