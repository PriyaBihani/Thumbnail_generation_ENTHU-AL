const router = require("express").Router();
const { check } = require("express-validator");

const { isSignedIn } = require('../middlewares')

const { jsonPatch } = require('../controllers/jsonpatch')

// @route   POST api/jsonpatch
// @desc    JSON Patching
// @access  Protected
router.post(
  "/jsonpatch",
  [
    check("jsonObject", "JSON document Object (jsonObject) is required").notEmpty(),
    check("jsonPatchObject", "JSON patch object (jsonPatchObject) is required").notEmpty(),
  ],
    isSignedIn,
    jsonPatch
);

module.exports = router;