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

// **************** Setup Server ******************
const port = 8080; // Setting the port

// Designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`App listening on port ${port}.`)
})

console.log('try to start server');

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    console.log("test GET calleddd");
    res.send(mockAPIResponse)
});

// Just testing a GET route to an app instance, using the path '/data' to return a string 'welcome!'
// app.get('/data', function (req, res) { res.send('welcome!'); });

// Setup POST routes
app.get('/all', function (req, res) { // Here, we use the get method on the instance of our app (called app above). Also, we created a new route named '/all' here, so that the route 'localhost:3000/all' will now trigger the get request, which will return the JS object. req is the data provided by the GET request and res is the data returned to the GET request
  console.log('all called');
  res.send(aylienData); // Using the get request to return the data (within projectData - once we post data into projectData), i.e., adding the line of code that will return the JS object when the GET request is made
});


//As a test, create a POST route that uses the url /addData and sends the response POST received when used to make a request
app.post('/add', addData );

function addData (req, res) {
    console.log("addData called");
    let data = req.body;
    aylienData["userResponse"] = data.userResp;
 };
 

data = [];
app.post('/addInfo', addSomeData);
function addSomeData (req, res){
    let theData = req.body;
    data.push(theData);
    console.log(req.body);
 };

/*
app.post('/add', addData);

function addData (req, res) {
    console.log("add POST calleddd");
    res.send({"result": "ok"});
    //let data = req.body;
    //console.log("alyien data is now posted", aylienData);
    //aylienData["userResponse"] = data.userResp;
};
*/


app.post('/allData', postResponse);

function postResponse(){
    console.log("post received");
};


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
 
  // TODO:  after getting the response from the API, store the data in a variable, and in the client side you create an UI updating function that will update the UI 