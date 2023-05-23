const express = require("express");
const {
  getUser,
  getUsers,
  addUser,
  removeUser,
  updateProfile,
  addAddress,
  updateAddress,
} = require("../controller/user.controller");

const userRouter = express.Router();

// POST v1/user/getuser
userRouter.post("/getuser", getUser);

// POST v1/user/getusers
userRouter.post("/getusers", getUsers);

// POST v1/user/adduser
userRouter.post("/adduser", addUser);

// POST v1/user/updateuser
userRouter.post("/updateprofile", updateProfile);

// POST v1/user/updateuser
userRouter.post("/updateprofile", updateProfile);

// POST v1/user/addaddress
userRouter.post("/addaddress", addAddress);

// POST v1/user/updateaddress
userRouter.post("/updateaddress", updateAddress);

// POST v1/user/remove
userRouter.post("/remove", removeUser);

module.exports = userRouter;
