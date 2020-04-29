// Using Node.js package: https://github.com/ogt/valid-url
// Install: npm install valid-url --save

var validUrl = require('valid-url');

function checkForURL(inputText) {
    if (validUrl.isUri(suspect)){
        console.log('Looks like an URI');
    } else {
        console.log('Not a URI');
    }
}

export { checkForURL }
