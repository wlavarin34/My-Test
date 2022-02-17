const express = require("express");
var router = express.Router();
const getFrequences = require("../getFrequentWords");
var fs = require("fs");


const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

router.post("/mostfrequent", upload.single('file') , (req,res)=>{
    var number = req.body.number;
    var path = req.file.path;
    console.log(req.body.number);
    console.log(req.file.path);
    var text = fs.readFileSync(path).toString();
    var data = getFrequences(text).frequencies
   //var data = getFrequences(path,number).frequencies.sort((a,b)=>{return b.count - a.count})
    data.length = number;
   return res.json(data);
});



module.exports = router;