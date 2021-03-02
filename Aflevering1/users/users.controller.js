const express = require("express");
const router = express.Router();
const userService = require("./user.service");
const authorize = require("../_helpers/authorize");
const Role = require("../_helpers/role");

//Routes set up
router.post("/login", authenticate); //public router
router.get("/", authorize(Role.Admin), getAll); //Admin only
router.get("/:id", authorize(), getById); //all authenticated users
module.exports = router;

async function authenticate(req, res, next) {
  try {
    const user = await userService.authenticate(req.body);
    user
      ? res.json(user)
      : res.status(400).json({
          message: "Username or password is incorrect",
        });
  } catch (err) {
    next(err);
  }
}

async function getAll(req, res, next) {
  try {
    const users = await userService.getAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const currentUser = req.user;
    const id = parseInt(req.params.id);

    // only allow admins to access other user records
    if (id !== currentUser.sub && currentUser.role !== Role.Admin) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const user = await userService.getById(req.params.id);
    user ? res.json(user) : res.sendStatus(404);
  } catch (err) {
    next(err);
  }
}
