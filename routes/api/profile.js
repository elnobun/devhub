/* Import module */
const express = require("express");
const router = express.Router();

/**
 * @method:       GET api/profile/test
 * @description:  Tests Profile route
 * @access:       PUBLIC Route
 */
router.get("/test", (req, res) => res.json({ msg: "Profile Page" }));

/* export router module */
module.exports = router