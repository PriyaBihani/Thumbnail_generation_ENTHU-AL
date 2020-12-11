const router = require("express").Router();
const { check } = require("express-validator");

const { isSignedIn } = require('../middlewares')

const { generateThumbnail } = require('../controllers/thumbnail')

// @route   POST api/thumbnail
// @desc    Generate thumbnail
// @access  Protected
router.post(
  "/thumbnail",
  [
    check("imageUrl", "Image Url is required").notEmpty(),
  ],
    isSignedIn,
    generateThumbnail
);

module.exports = router;