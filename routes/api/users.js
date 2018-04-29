/* Import module */
const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

/* Import User model */
const User = require("../../models/User");

/*
 * @method:       GET api/users/home
 * @description:  Users home route
 * @access:       PUBLIC Route
 */
router.get("/test", (req, res) => res.json({ msg: "Users Page" }));

/*
 * @method:       POST api/users/register
 * @description:  Register Users to the database
 * @access:       PUBLIC Route
 */
router.post("/register", (req, res) => {
  // Check if user email already exist in the database
  User.findOne({ email: req.body.email }).then(email => {
    if (email) {
      return res.status(400).json({ email: "email already exist" });
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

/* export router module */
module.exports = router;
