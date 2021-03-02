const jwt = require("jsonwebtoken");
const Role = require("../_helpers/role");
const User = require("../models/user");
//require(process.env.ACCESS_TOKEN_SECRET)

//simple users - are to be stored in DB

const users = [
  {
    username: "admin",
    password: "admin",
    firstname: "Admin",
    lastname: "User",
    role: Role.Admin,
  },
  {
    username: "manager",
    password: "manager",
    firstname: "Manager",
    lastname: "User",
    role: Role.Manager,
  },
  {
    username: "guest",
    password: "guest",
    firstname: "Guest",
    lastname: "User",
    role: Role.Guest,
  },
  {
    username: "user",
    password: "user",
    firstname: "User",
    lastname: "User",
    role: Role.User,
  },
];

//User.create(users);

module.exports = {
  authenticate,
  getAll,
  getById,
};

async function authenticate({ username, password }) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const token = jwt.sign(
      { sub: user.id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET
    );
    const { password, ...userWithoutPassword } = user;
    return {
      ...userWithoutPassword,
      token,
    };
  }
}

async function getAll() {
  return users.map((u) => {
    const { password, ...userWithoutPassword } = u;
    return userWithoutPassword;
  });
}

async function getById(id) {
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) return;
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}
