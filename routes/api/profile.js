/* Import module */
const express = require("express");
const router = express.Router();
const passport = require("passport");
/* Import registration validator */
const validateProfile = require("../../validation/profile");

/* Import profile module */
const Profile = require("../../models/Profile");

/*
 * @method: GET
 * @return:  /api/profile/test
 * @description: Test profile page
 * @access:  PUBLIC
 */
router.get("/test", (req, res) => res.json({ msg: "Profile Page" }));

/*
 * @method: GET
 * @return:  /api/profile
 * @description: Get current user profile
 * @access:  PRIVATE
 */
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Find user
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Check if user has a profile.
        if (!profile) {
          return res
            .status(400)
            .json({ NoProfile: "user currently has no profile" });
        }
        // If profile exist, send profile
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

/*
 * @method: POST
 * @return:  /api/profile
 * @description: Create/Update current user profile
 * @access:  PRIVATE
 */
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfile(req.body);

    // Check validation
    if (!isValid) {
      // Return errors
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;

    // Create an array list of Standard & social fields,
    // and check if fields are present.
    const standardFields = [
        "handle",
        "company",
        "website",
        "location",
        "bio",
        "status",
        "githubrepo"
      ],
      socialFields = [
        "youtube",
        "twitter",
        "facebook",
        "linkedin",
        "instagram"
      ];

    standardFields.forEach(field => {
      if (req.body[field]) profileFields[field] = req.body[field];
    });

    // Split skills into  an array list
    if (typeof req.body.skills !== "undefined") {
      profileFields.skills = req.body.skills.split(",");
    }

    // Social list
    profileFields.social = {};
    socialFields.forEach(field => {
      if (req.body[field]) profileFields.social[field] = req.body[field];
    });

    // If handle is not in use by any user, check is there is
    // a profile with the user id
    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update user profile, and return the user
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        // First check if the handle is in use by another user
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile && profile.user !== req.user.id) {
            return res
              .status(400)
              .json({ handleError: "handle already exist" });
          }
          // Create and/or save user profile to the database
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

/* export router module */
module.exports = router;
