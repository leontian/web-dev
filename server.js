var express = require('express');
var app = express();

//var morgan = require('morgan');
//app.use(morgan('dev')); // log every request to the console



var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

//require ("./test/app.js")(app);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;
console.log(ipaddress);
console.log(port);

var assignment = require("./assignment/app");
assignment(app);

app.listen(port, ipaddress);
