let express = require("express");
let bodyParser= require('body-parser');
const nefr = require('./routes/newEntryFormRoutes');
 const usr = require('./routes/userRoutes');

const app = express();

// If localhost, set to this
//for new entry form
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

//
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(nefr)
app.use(usr)

let mongoose = require("mongoose");
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://cynthiawilliamsa:fitness123@ds121814.mlab.com:21814/fitnesstats')

app.listen(3002, (err) => {
    if(err) {
        return console.log("Error", err);
    }
    console.log("Web server live on 3002")
});