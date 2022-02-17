const express = require("express");
var router = express.Router();
const getFrequences = require("../getFrequentWords");
var fs = require("fs");

//Start the file uploading process here
const multer = require('multer')

//Define destination and filename

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
//create and add middleware
const upload = multer({ storage: storage })

//Create a post request
router.post("/mostfrequent", upload.single('file') , (req,res)=>{
    var number = req.body.number;
    var path = req.file.path;
    var text = fs.readFileSync(path).toString();
    var data = getFrequences(text).frequencies
    data.length = number;
   return res.json(data);
});



module.exports = router;
