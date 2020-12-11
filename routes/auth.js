const router = require("express").Router();
const { check } = require("express-validator");

const { logIn } = require("../controllers/auth.js");

// @route   POST api/login
// @desc    Authenticate user and get token
// @access  Public
router.post(
  "/login",
  [
    check("username", "Username field is required").notEmpty(),
    check("password", "Password field is required with minimum 6 length").isLength({
      min: 6,
    }),
  ],
  logIn
);

module.exports = router;