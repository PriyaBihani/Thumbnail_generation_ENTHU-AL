const fs = require('fs');
const axios = require('axios');
const Path = require("path");
const jimp = require('jimp')
const { validationResult } = require("express-validator");


// @function: Download Image
const download_image = (url, image_path) =>
  axios({
    url,
    responseType: 'stream',
  }).then(
    res =>
       new Promise((resolve, reject) => {
         res.data
          .pipe(fs.createWriteStream(image_path))
          .on('finish', () => resolve())
          .on('error', e => reject(e));
      }),
  );

// @route   POST api/thumbnail
// @desc    Generate thumbnail
// @access  Protected
exports.generateThumbnail = async(req, res) => {

    // Check in error first 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Download image and Overriding the current one with the same name
        const { imageUrl } = req.body
        const path =  Path.resolve( "images", 'example.jpg');
        await download_image(imageUrl, path);

        // Convert image to base64
        const img = await jimp.read(path)
        const base64 = await (await img.resize(50, 50)).getBase64Async(jimp.AUTO)

        // return res
        res.json({
            inputImageURL: imageUrl,
            OutputImageBase64: `${base64}`,
            message: "Thumbnail generated",
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }


}