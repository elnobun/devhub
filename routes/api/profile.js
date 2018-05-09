/* Import module */
const express = require("express");
const router = express.Router();
const passport = require("passport");
/* Import validator */
const validateProfile = require("../../validation/profile");
const validateExperience = require("../../validation/experience");
const validateEducation = require("../../validation/education");

/* Import profile model */
const Profile = require("../../models/Profile");
/* Import User model */
const User = require("../../models/User");

/*
 * @method: GET
 * @return:  /api/profile/all
 * @description: Get all Profiles from the database
 * @access:  PUBLIC
 */
router.get("/all", (req, res) => {
  Profile.find()
    .populate("user", ["name", "avatar"])
    .then(profiles => {
      // Check if database contains any profile
      if (!profiles || profiles.length === 0) {
        return res
          .status(404)
          .json({ NoProfiles: "There are currently no profiles" });
      } else {
        // Return the available profiles
        return res.json(profiles);
      }
    })
    .catch(err => res.status(404).json({ CastError: err.message }));
});

/*
 * @method: GET
 * @return:  /api/profile/user/:user_id
 * @description: Get profile by user ID
 * @access:  PUBLIC
 */
router.get("/user/:user_id", (req, res) => {
  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (!profile) {
        return res.status(404).json({ NotFound: "This user has no profile" });
      } else {
        return res.json(profile);
      }
    })
    .catch(err => res.status(404).json({ CastError: err.message }));
});

/*
 * @method: GET
 * @return:  /api/profile/handle/:handle
 * @description: Get profile by handle
 * @access:  PUBLIC
 */
router.get("/handle/:handle", (req, res) => {
  Profile.findOne({ handle: req.params.handle })
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (!profile) {
        return res.status(404).json({ NotFound: "This user has no profile" });
      } else {
        return res.json(profile);
      }
    })
    .catch(err => res.status(404).json({ CastError: err.message }));
});

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
      .populate("user", ["name", "avatar"])
      .then(profile => {
        // Check if user has a profile.
        if (!profile) {
          return res
            .status(404)
            .json({ NoProfile: "user currently has no profile" });
        }
        // If profile exist, send profile
        return res.json(profile);
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
        "githubuser"
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
          } else {
            // Create and/or save user profile to the database
            new Profile(profileFields)
              .save()
              .then(profile => res.json(profile));
          }
        });
      }
    });
  }
);

/*
 * @method: POST
 * @return:  /api/profile/experience
 * @description: Post experience to profile
 * @access:  PRIVATE
 */
router.post(
  "/experience",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateExperience(req.body);

    // Check validation
    if (!isValid) {
      // Return errors
      return res.status(400).json(errors);
    }

    // Find logged in user
    Profile.findOne({ user: req.user.id }).then(profile => {
      const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      // Add the experience to the Profile
      profile.experience.unshift(newExp);
      profile.save().then(profile => res.json(profile));
    });
  }
);

/*
 * @method: POST
 * @return:  /api/profile/education
 * @description: Post education to profile
 * @access:  PRIVATE
 */
router.post(
  "/education",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEducation(req.body);

    // Check validation
    if (!isValid) {
      // Return errors
      return res.status(400).json(errors);
    }

    // Find logged in user
    Profile.findOne({ user: req.user.id }).then(profile => {
      const newEdu = {
        school: req.body.school,
        degree: req.body.degree,
        fieldOfStudy: req.body.fieldOfStudy,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      // Add the experience to the Profile
      profile.education.unshift(newEdu);
      profile.save().then(profile => res.json(profile));
    });
  }
);

/*
 * @method: DELETE
 * @return:  /api/profile/experience/experience_id
 * @description: Delete Experience
 * @access:  PRIVATE
 */
router.delete(
  "/experience/:experience_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Find logged in user
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Retrieve experience to remove
        profile.experience.pull({ _id: req.params.experience_id });
        // Save the updated profile
        profile
          .save()
          .then(profile => res.json(profile.experience))
          .catch(err =>
            res.status(404).json({
              valueError: (err.message =
                "delete request failed: ObjectID is not valid")
            })
          );
      })
      .catch(err => res.status(404).json(err));
  }
);

/*
 * @method: DELETE
 * @return:  /api/profile/education/education_id
 * @description: Delete Education
 * @access:  PRIVATE
 */
router.delete(
  "/education/:education_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Find logged in user
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Retrieve experience to remove
        profile.education.pull({ _id: req.params.education_id });
        // Save the updated profile
        profile
          .save()
          .then(profile => res.json(profile.education))
          .catch(err =>
            res.status(404).json({
              valueError: (err.message =
                "delete request failed: ObjectID is not valid")
            })
          );
      })
      .catch(err => res.status(404).json(err));
  }
);

/*
 * @method: DELETE
 * @return:  /api/profile
 * @description: Delete User and Profile
 * @access:  PRIVATE
 */
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Find user and remove user and profile
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

/* export router module */
module.exports = router;
