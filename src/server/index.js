const dotenv = require('dotenv');
dotenv.config();

// Set aylien API credentials
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// See: https://docs.aylien.com/textapi/sdks/#node-js-sdk
// Install the SDK, cd into this folder and type in the command line: npm install aylien_textapi
// Require the Aylien npm package:
var aylien = require("aylien_textapi");

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
