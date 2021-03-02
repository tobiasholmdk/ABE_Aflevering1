var express = require('express');
var router = express.Router();
var usercontroller = require('../controllers/usercontroller');
const authorize = require('../_helpers/authorize');
const roles = require('../_helpers/role');

/* POST add hotel form */
/**
 * @swagger
 * /user/login:
 *   post:
 *      summary: User is able to login and get a token
 *      requestBody:
 *       content:
 *         application/json:
 *           schema:      # Request body contents
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:   # Sample object
 *               username: My User Name
 *               password: My Password
 *      responses:
 *        200:
 *          description: OK
 */
router.post('/login', usercontroller.login);
/* POST add hotel form */
/**
 * @swagger
 * /user/adduser:
 *   post:
 *      summary: User is able to register
 *      requestBody:
 *       content:
 *         application/json:
 *           schema:      # Request body contents
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:   # Sample object
 *               username: My User Name
 *               password: My Password
 *      responses:
 *        200:
 *          description: OK
 */
router.post('/adduser', usercontroller.adduser);

/* POST add hotel form */
/**
 * @swagger
 * /user/changerole:
 *   post:
 *      summary: Admin can change role to manager for a user
 *      requestBody:
 *       content:
 *         application/json:
 *           schema:      # Request body contents
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:   # Sample object
 *               username: Some User Name
 *      responses:
 *        200:
 *          description: OK
 */
router.post('/changerole', authorize(roles.Admin), usercontroller.changeroleManager);
/* POST add hotel form */
/**
 * @swagger
 * /user/changeroleUser:
 *   post:
 *      summary: Admin can change role back to user
 *      requestBody:
 *       content:
 *         application/json:
 *           schema:      # Request body contents
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:   # Sample object
 *               username: Some User Name
 *      responses:
 *        200:
 *          description: OK
 */
router.post('/changeroleUser', authorize(roles.Admin), usercontroller.changeroleBack);
module.exports = router;