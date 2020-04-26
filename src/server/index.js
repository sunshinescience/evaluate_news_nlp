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
    //console.log("test get calleddd");
    res.send(mockAPIResponse)
})

// Setup POST routes
// TODO: See server.js file from last project at the bottom to work on this part???
/*
app.post('/process', process);

function process (req, res) { 
    console.log('process called');   
  };
*/

/*
app.get("/testing", function(req, res){
    res.send("testing it out!");
});
*/


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
  
  