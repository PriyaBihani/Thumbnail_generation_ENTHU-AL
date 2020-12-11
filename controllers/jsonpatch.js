const  jsonpatch = require('jsonpatch')
const { validationResult } = require("express-validator");

// @route   POST api/jsonpatch
// @desc    JSON Patching
// @access  Protected
exports.jsonPatch = async(req, res) => {
    
    // Check in error first 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        patcheddoc = jsonpatch.apply_patch(req.body.jsonObject, req.body.jsonPatchObject);
        res.json(patcheddoc)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
}