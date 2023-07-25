const express = require("express");
const router = express();
var nodemailer = require("nodemailer");
const ejs = require("ejs");

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

router.post("/newsletter", (req, res) => {
  try {
    const data = {
      email: req.body.email,
    };
    ejs.renderFile(
      __dirname + "/newsletter.ejs",
      { data: data },
      (err, htmlFile) => {
        if (err) {
          res.send({ status: 500, error: err.message });
        } else {
          var mailOptions = {
            from: EMAIL,
            to: [data.email],
            subject: "Welcome to the T-Shirt 3D design!",
            html: htmlFile,
          };
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              res.send({ status: 500, error: err.message });
            } else {
              console.log(info);
              res.send({ status: 200, msg: "Email Sent" });
            }
          });
        }
      }
    );
  } catch (error) {
    res.send({ status: 500, error: error.message });
  }
});

module.exports = router;
