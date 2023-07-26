const express = require("express");
const app = express();
const cors = require("cors");
const verifyRouter = require("./routes/verify");
const mailRouter = require("./routes/mail");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.send("Welcome to T-Shirt Design API 🪅");
});
app.use("/v1/verify", verifyRouter);
app.use("/v1/mail", mailRouter);
app.listen(3000, () => {
  console.log("Running..");
});
