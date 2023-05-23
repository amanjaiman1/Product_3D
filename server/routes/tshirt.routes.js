
const express = require("express");
const {
  getTshirt,
  getTshirts,
  addTshirt,
  removeTshirt,
} = require("../controller/tshirt.controller");

const tshirtRouter = express.Router();

// POST v1/tshirt/gettshirt
tshirtRouter.post("/gettshirt", getTshirt);

// POST v1/tshirt/getusers
tshirtRouter.post("/gettshirts", getTshirts);

// POST v1/tshirt/addtshirt
tshirtRouter.post("/addtshirt", addTshirt);

// POST v1/tshirt/remove
tshirtRouter.post("/remove", removeTshirt);

module.exports = tshirtRouter;
