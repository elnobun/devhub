/* Import modules */
const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
/* Import Passport*/
const passport = require("passport");
/* Import registration validator */
const validateRegistration = require("../../validation/register");
/* Import files */
const secretKey = require("../../config/keys").secretOrKey;
const User = require("../../models/User");

/*
 * @method:  GET
 * @return:  /api/users/test
 * @description: Testing user route
 * @access:  PUBLIC
 */
router.get("/test", (req, res) => res.json({ msg: "Users Page" }));

/*
 * @method: POST
 * @return:  /api/users/test
 * @description: Register Users to the database
 * @access:  PUBLIC
 */
router.post("/register", (req, res) => {
  // Validate user registeration
  const { errors, isValid } = validateRegistration(req.body);
  // Check validation for name & email
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // Check if user email already exist in the database
  User.findOne({ email: req.body.email }).then(email => {
    if (email) {
      return res.status(400).json((errors.email = "email already exist"));
    } else {
      // Create an avatar variable, that details the size, rating and default
      // of the user avatar. It uses gravatar to extract the users profile pic
      // that already exist through a previous login like google, etc.
      const avatar = gravatar.url(req.body.email, {
        s: "200", // size,
        r: "pg", // rating,
        d: "mm" // default
      });
      // Create a new Instance of user to the database
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar
      });
      // Hash user's password, and save user details to database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

/*
 * @method: POST
 * @return:  /api/users/login
 * @description: Login User / Return JWT token
 * @access:  PUBLIC
 */
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Check if the user already exist through their email
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }
    // Check if passowrd is the same as the one in database.
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // If user match,
        // 1. Create a payload
        // 2. Sign Token
        const paylod = { id: user.id, name: user.name, avatar: user.avatar };
        jwt.sign(paylod, secretKey, { expiresIn: 172800 }, (err, token) => {
          res.json({
            success: true,
            token: `Bearer ${token}`
          });
        });
      } else {
        return res.status(400).json({ msg: "email or passowrd is incorrect" });
      }
    });
  });
});

/*
 * @method: GET
 * @return:  /api/users/current
 * @description: Return current user else unauthorized
 * @access:  PRIVATE
 */
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Destructure the jwt content
    const { id, name, email } = req.user;
    res.json({
      id,
      name,
      email
    });
  }
);

/* export router module */
module.exports = router;
