/* Import module */
const express = require("express");
const router = express.Router();

/**
 * @method:       GET api/posts/test
 * @description:  Tests Posts route
 * @access:       PUBLIC Route
 */
router.get("/test", (req, res) => res.json({ msg: "Posts Page" }));

/* export router module */
module.exports = router;