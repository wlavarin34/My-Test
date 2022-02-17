const express = require("express");
const bodyParser = require("body-parser");
const mostFrequent = require("./routes/frequent")
var cors = require('cors')

var app = express();

app.use(bodyParser.json({limit: "1gb"}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

app.use('/upload', mostFrequent);

app.get('/', (req, res) => {
    res.send('Working...')
  });
  
app.listen(8080,()=>{
    console.log("listening on port 8080...");
})

