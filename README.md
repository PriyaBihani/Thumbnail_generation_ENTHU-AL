# Thumbnail_generation_ENTHU-AL

This is a task given by ENTHU-AL for internship. It has 3 Features:

1. Authentication:
    For authentication route is "/api/login". The body of authentication should contain username and password. It will return a jwt-token. Store it for further use.
2. Thumbnail Generation:
    For thumbnail Generation route is "/api/thumbnail". The body of thumbnail should contain imageUrl. It will return image in base64 format
3. JSON Patching:
    For JSON patching route is "/api/jsonpatch". The body should contain an jsonObject(an object) and jsonPatchObject(an array). It will return the new json object.
    
Steps to Run:
1.git clone https://github.com/PriyaBihani/Thumbnail_generation_ENTHU-AL
2.npm install
3.npm start

Make sure you add an Authorization header before making requests to the protected endpoint. eg Authorization : Bearer token
