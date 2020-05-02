var validUrl = require('valid-url');

function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit entered, checking input for url/no-url");

    //postData("http://localhost:8080/add", {"hi": "from browser"});
    const userInput = document.getElementById('name').value;
    validURL(userInput);

    console.log("handleSubmit done");
};

function validURL(userInput) {
  // Check for valid URL (from: https://github.com/ogt/valid-url)
  if (validUrl.isUri(userInput)){
    console.log("is a url", userInput);
    const message = "This is a valid URL";
    document.getElementById('noErrorMessage').innerHTML = message;
  }
  // Conduct aylien API text analysis
  else {
      console.log("not a url", userInput);
      //document.getElementById('noErrorMessage').innerHTML = " ";
      console.log("sending input to backendn for analysis");
      postData("http://localhost:8080/add", {"userResponse": userInput});
      updateUI(); // Update analysis of Form Results: Text entered, Polarity, and Subjectivity
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
        const newData = await response.json();
        //console.log("newData is: ", newData);
        //await updateUI();
        return newData;
    } catch(error) {
        console.log('error', error);
    };
};

// Updating the UI of the app dynamically
const updateUI = async () => {
    const request = await fetch('http://localhost:8080/all');
    try{
      const allData = await request.json();
      console.log("allData: ", allData);
      document.getElementById('results').innerHTML = allData.userResponse;
      document.getElementById('polarity').innerHTML = allData.userPolarity;
      document.getElementById('subjectivity').innerHTML = allData.userSubjectivity;
    }catch(error){
      console.log("error", error);
    }
    return allData;
  };

export { handleSubmit,
        updateUI,
        validURL
       } // export is what allows us to import the file within the index.js file

