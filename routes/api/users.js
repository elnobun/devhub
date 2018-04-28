/* Import module */
const express = require("express");
const router = express.Router();

/**
 * @method:       GET api/users/test
 * @description:  Tests Users route
 * @access:       PUBLIC Route
 */
router.get("/test", (req, res) => res.json({ msg: "Users Page" }));

/* export router module */
module.exports = router