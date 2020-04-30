var validUrl = require('valid-url');

function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit entered");

   const userInput = document.getElementById('name').value;
   //postData("http://localhost:8080/add", {"hi": "from browser"});
   
   
   //check for valid URL (from: https://github.com/ogt/valid-url)
   if (validUrl.isUri(userInput)){
    postData('http://localhost:8081/add', userInput)
   }
   else {
        document.getElementById('errorMessage').innerHTML = "Error: Not a valid URI";
    }
    
    postData("http://localhost:8080/add", {"userResponse": userInput});
   
    updateUI();

    console.log("handleSubmit done");
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
  };

export { handleSubmit } // export is what allows us to import the file within the index.js file
