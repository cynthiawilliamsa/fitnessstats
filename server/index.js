let express = require("express");
let bodyParser= require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

let mongoose = require("mongoose");
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://cynthiawilliamsa:fitness123@ds121814.mlab.com:21814/fitnesstats')

app.listen(3002, (err) => {
    if(err) {
        return console.log("Error", err);
    }
    console.log("Web server live on 3002")
});