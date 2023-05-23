const express = require("express");
const {
  getUser,
  getUsers,
  addUser,
  removeUser,
} = require("../controller/user.controller");

const userRouter = express.Router();

// POST v1/user/getuser
userRouter.post("/getuser", getUser);

// POST v1/user/getusers
userRouter.post("/getusers", getUsers);

// POST v1/user/adduser
userRouter.post("/adduser", addUser);

// POST v1/user/remove
userRouter.post("/remove", removeUser);

module.exports = userRouter;
