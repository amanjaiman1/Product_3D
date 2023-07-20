const rateLimit = require("express-rate-limit");
const express = require("express");
const fb = require("./config");
const auth = fb.auth();
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const limiter = rateLimit({
  max: 300,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP",
});
app.use(limiter);
app.post("/v1/verify", async (req, res) => {
  const { access_token, uid } = req.body;
  console.log(req.body);
  const response = await auth
    .verifyIdToken(access_token)
    .catch((err) => console.log(err));
  console.log(response);
  if (response?.uid == uid) {
    res.send({ isVerified: true });
  } else {
    res.send({ isVerified: false });
  }
});

app.listen(3000, () => {
  console.log("Running..");
});
