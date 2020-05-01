var validUrl = require('valid-url');

function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit entered");

   //postData("http://localhost:8080/add", {"hi": "from browser"});
   const userInput = document.getElementById('name').value;
   
   // Check for valid URL (from: https://github.com/ogt/valid-url)
   if (validUrl.isUri(userInput)){
        updateURL(); // Form Results: Text entered, Polarity, and Subjectivity show up as empty on the page if a URL is input into the form
   }
   // Conduct aylien API text analysis
   else {
        document.getElementById('errorMessage').innerHTML = "Error: Not a valid URL";
        postData("http://localhost:8080/add", {"userResponse": userInput});
        updateUI(); // Update analysis of Form Results: Text entered, Polarity, and Subjectivity
   }
    console.log("handleSubmit done");
    return userInput;
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
        console.log(newData);
        //await updateUI();
        return newData;
    } catch(error) {
        console.log('error', error);
    };
};

// test to add some data
// postData("http://localhost:8080/add", {userResp: 'warm'});

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

function updateURL() {
    const validURL = document.getElementById('noErrorMessage').innerHTML = "This is a valid URL";
    document.getElementById('results').innerHTML = ""; // If checking for a URL, then the form results, polarity, and subjectivity show as empty
    document.getElementById('polarity').innerHTML = "";
    document.getElementById('subjectivity').innerHTML = "";

    return validURL
};

const valURL = updateURL();

export { handleSubmit,
        updateUI,
        updateURL } // export is what allows us to import the file within the index.js file
