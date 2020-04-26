// Setup empty JS object - to act as endpoint for all routes (i.e., this variable acts as the endpoint for all our app data)
const aylienData = {};

const dotenv = require('dotenv');
dotenv.config();
//dotenv.config({path: '../../.env' });
var path = require('path') // Extract the filename from a file path
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors'); // Require Cors (which we've already installed on the command line) which let's the browser and server talk to each other withour any security interruptions

var aylien = require("aylien_textapi"); // Require the Aylien npm package:

// Set aylien API credentials
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

// Create an instance of the app, with express
const app = express()

// Initialize the main project folder. We're pointing the app to the dist folder
app.use(express.static('dist'))

/* Middleware*/
// Here we are configuring express to use body-parser as middle-ware so that we can parse our data
app.use(bodyParser.urlencoded({ extended: false })); // Here we use the 'use' method to tell bodyParser exactly how we want our data to be parsed
app.use(bodyParser.json()); // We're going to mostly want JSON

// Cors for cross origin allowance
app.use(cors());

// console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// **************** Setup Server ******************
const port = 8080; // Setting the port

// Designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`App listening on port ${port}.`)
})

console.log('try to start server');

app.get('/test', function (req, res) {
    console.log("test get calleddd");
    res.send(mockAPIResponse)
});

app.get("/all", function(req, res){
    console.log("all called");
    res.send(aylienData);
});

// Setup POST routes
//As a test, create a POST route that uses the url /add and sends the response POST received when used to make a request
app.post('/add', addData);

function addData (req, res) {
    res.send('POST received');
    //let data = req.body;
    //console.log("alyien data is now posted", aylienData);
    //aylienData["userResponse"] = data.userResp;
};

/*
app.post('/allData', postResponse);

function postResponse(){
    console.log("post received");
};
*/

// TODO: POST method route - adds data to aylienData object
/*
function postResponse(){
    let data = req.body;
    textapi.sentiment({
        url: data.text,
        mode: 'document' // parameter used for longer text such as a review or an article via aylien
    });
    textPolarity["polarity"] = data.
};
*/

/*
app.post('/process', process);

function process (req, res) { 
    console.log('process called');   
  };
*/



/*
// Example of using Sentiment Analysis from: https://docs.aylien.com/textapi/sdks/#node-js-sdk
textapi.sentiment({
    'text': 'John is a very good football player!'
  }, function(error, response) {
    if (error === null) {
      //console.log(response);
      console.log("Polarity: ", response.polarity);
      //console.log(response.subjectivity);
      //console.log(response.text);
      
    }
  });
  */
  