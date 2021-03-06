const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const async = require("async");
const expressLayouts = require("express-ejs-layouts");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

// user/
router.post("/signup", (req, res) => {
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    city: req.body.city,
    country: req.body.country,
    faveArtist: req.body.faveArtist,
  };
  // res.send(newUser)
  User.findOne({ email: newUser.email })
    .then((user) => {
      // if email not incloads the database
      if (!user) {
        bcrypt.hash(newUser.password, 10, (err, hash) => {
          newUser.password = hash;
          User.create(newUser).then(() =>
            res.json({ msg: "user created", userInf: newUser, signup: true })
          );
        });
      } else {
        //if email have been used
        res.json({ msg: "email used", signup: false });
      }
    })
    .catch((err) => res.json(err));
});

router.post("/signin", (req, res) => {
  const signinUser = {
    email: req.body.email,
    password: req.body.password,
  };

  User.findOne({ email: signinUser.email })
    .then((user) => {
      //if email exist
      if (user) {
        // if password is correct
        if (bcrypt.compareSync(signinUser.password, user.password)) {
          let payload = { user };
          let token = jwt.sign(payload, "SECRET", { expiresIn: 36000000 });
          res.json({ token, signin: true });
          // if password is not correct
        } else {
          res.json({ msg: "password is not correct" });
        }
        //if email not exist
      } else {
        res.json({ msg: "email is not found" });
      }
    })
    .catch((err) => res.json(err));
});

// FORGET PASSWORD
router.post("/forgetPass", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) return res.json({ msg: "Email doesn't Exist." });
    user.resetPasswordToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordExpires = Date.now() + 36000000;
    user.save().then((user) => {
      const msg = {
        to: user.email,
        from: "experiment.yourself1@gmail.com",
        subject: "Reset Password",
        text: " ",
        html: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n 
        Please click on the following link, or paste this into your browser to complete the process:\n\n +
        http://localhost:8001/user/reset/${user.resetPasswordToken}
        \n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n
        `,
      };
      sgMail
        .send(msg)
        .then(() => res.json({ msg: "Sensing Email: Success." }))
        .catch((err) => res.json({ msg: err }));
    });
  });
});

router.post("/reset/:token", (req, res) => {
  console.log(req.body.password);

  User.findOne({ resetPasswordToken: req.params.token }).then((user) => {
    if (!user) return res.json({ msg: "User token doesn't Exist." });
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      user.password = hash;
      user.save().then(() => res.json({ msg: "Password Changed." }));
    });
  });
});

module.exports = router;
