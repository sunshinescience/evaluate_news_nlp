// Server side code
const dotenv = require('dotenv');
dotenv.config();
//dotenv.config({path: '../../.env' });
var path = require('path') // Extract the filename from a file path
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi"); // Require the Aylien npm package:

// Set aylien API credentials
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

// Setup empty JS object - to act as endpoint for all routes (i.e., this variable acts as the endpoint for all our app data)
const aylienData = {};

// Require Express (which we've already installed on the command line) to run server and routes
const express = require('express');

// Create an instance of our app, with express
const app = express();

// Dependencies
const bodyParser = require('body-parser');

/* Middleware*/
// Here we are configuring express to use body-parser as middle-ware so that we can parse our data
app.use(bodyParser.urlencoded({ extended: false })); // Here we use the 'use' method to tell bodyParser exactly how we want our data to be parsed
app.use(bodyParser.json()); // We're going to mostly want JSON

// Cors for cross origin allowance
const cors = require('cors'); // Require Cors (which we've already installed on the command line) which let's the browser and server talk to each other withour any security interruptions
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist')); // We use our 'use' method and this time, we're pointing our app to the folder that we want it to look at

// **************** Setup Server ******************
// Map URL's to functions
const port = 8080; // We set our port

const server = app.listen(port, listening); // Call the listen method and pass it our callback function

function listening() {
  console.log(`server running on local host: ${port}`);
}

// **************** Setup Express route ****************** 
// Note that the function is within the GET in the code below, but it could be placed separate 
app.get('/all', function (req, res) { // Here, we use the get method on the instance of our app (called app above). Also, we created a new route named '/all' here, so that the route 'localhost:8080/all' will now trigger the get request, which will return the JS object. req is the data provided by the GET request and res is the data returned to the GET request
  console.log('all called');
  res.send(aylienData); // Using the get request to return the data (within projectData - once we post data into projectData), i.e., adding the line of code that will return the JS object when the GET request is made
});

app.get('/test', function (req, res) {
    console.log("test get calleddd");
    res.send(mockAPIResponse);
});

app.post('/addData', callBack);
function callBack (req, res) {
    console.log('addData called');
};


// POST method routes - adds data to aylienData object
app.post('/add', addInfo);

function addInfo (req, res) { 
  console.log('add called');
  //let data = req.body;
  //aylienData["userResponse"] = data.userResp;
  //console.log(aylienData);
};


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
 
  // TODO:  after getting the response from the API, store the data in a variable, and in the client side you create an UI updating function that will update the UI 
