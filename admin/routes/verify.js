const express = require("express");
const router = express.Router();
const fb = require("../config");
const auth = fb.auth();
router.post("/", async (req, res) => {
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

module.exports = router;
