var validUrl = require('valid-url');

function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit entered");

    /*
    fetch('http://localhost:8080/test')
    .then((data) => {
        return data.json(); // Parse the response as JSON
    })
    .then((data) => { // Examine the text in the response
        console.log(data);
    });
    */

   const userInput = document.getElementById('name').value;
   //postData("http://localhost:8080/add", {"hi": "from browser"});
   
   /*
   //checkForURL(userInput);
   if (validUrl.isUri(userInput)){
        console.log('Looks like an URI');
    } else {
        console.log('Not a URI');
    }
    */


   postData("http://localhost:8080/add", {"userResponse": userInput});
   
   updateUI();

    console.log("handleSubmit done");
};

/*
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}
*/

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


        // update dom with newData

    } catch(error) {
        console.log('error', error);
    };
};

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

function checkForURL(inputText) {
    if (validUrl.isUri(inputText)){
        console.log('Looks like an URI');
    } else {
        console.log('Not a URI');
    }
};

export { checkForURL }
export { handleSubmit } // export is what allows us to import the file within the index.js file
