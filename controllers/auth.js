const jwt = require("jsonwebtoken");
const config = require("config");
const { validationResult } = require("express-validator");

// @route   POST api/login
// @desc    Authenticate user and get token
// @access  Public
exports.logIn = async (req, res) => {

  // Check in error first 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const payload = req.body;
  
    try {
        // Mock authentication
        const authToken = jwt.sign(
            payload, 
            config.get("jwtSecret"), {
            expiresIn: 100000000,
        });
        res.json({ authToken });

    }catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};