//create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//use body parser to get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//set port
var port = process.env.PORT || 8080;

//get an instance of the express router
var router = express.Router();

//test route to make sure everything is working
router.get('/', function(req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

//more routes for our API will happen here

//register routes
//all of our routes will be prefixed with /api
app.use('/api', router);

//start the server
app.listen(port);
console.log('Magic happens on port ' + port);