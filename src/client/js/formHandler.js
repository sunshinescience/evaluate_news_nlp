var validUrl = require('valid-url');

function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit (1): handleSubmit entered, checking input for url/no-url");

    //postData("http://localhost:8080/add", {"hi": "from browser"});
    const userInput = document.getElementById('name').value;
    
    checkURL(userInput);

    console.log("handleSubmit (2): handleSubmit done");
};

function checkURL(userInput) {
  // Check for valid URL (from: https://github.com/ogt/valid-url)
  if (validUrl.isUri(userInput)){
    console.log("checkURL (1): is a url", userInput);
    document.getElementById('noErrorMessage').innerHTML = "This is a valid URL";
    document.getElementById('results').innerHTML = "";    
    document.getElementById('polarity').innerHTML = "";
    document.getElementById('subjectivity').innerHTML = "";
  }
  // Conduct aylien API text analysis
  else {
      console.log("checkURL (1): not a url", userInput);
      console.log("checkURL (2): sending input to backendn for analysis");
      postData("http://localhost:8080/analysis", {"userResponse": userInput});
  }
};

const postData = async (url = '', data = {}) => { 
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data), 
    });
    // return await response.json();
    
    try {
        const responseData = await response.json();
        console.log("postData: got response", responseData);
        console.log("postData: updating dom");
        document.getElementById('results').innerHTML = responseData.input;
        document.getElementById('polarity').innerHTML = responseData.userPolarity;
        document.getElementById('subjectivity').innerHTML = responseData.userSubjectivity;
        //await updateUI();
        return responseData;
    } catch(error) {
        console.log('error', error);
    };
};


export { handleSubmit,
        checkURL
       } // export is what allows us to import the file within the index.js file
