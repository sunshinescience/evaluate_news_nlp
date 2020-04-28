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

   //postData("http://localhost:8080/add", {"hi": "from browser"});
   postData("http://localhost:8080/add", {userResp: 'warm'});
   

    console.log("handleSubmit done");
};



    //document.getElementById('results').innerHTML = "dddd";
    // Check what text was put into the form field
    //let formText = document.getElementById('name').value = "nnnn";
    //formText = "dddd";

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

/*
const getData = async (url = '') => { 
    //console.log(url);
    console.log("started getData");
    
    try {
        const response = await fetch(url);
        console.log("awaited fetch");
        //const newData = await response.json();
        //console.log(response);
        //return response;
    } catch(error) {
        console.log('error', error);
    };
};
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
    } catch(error) {
        console.log('error', error);
    };
};

// postData("http://localhost:8080/add", {userResp: 'warm'});

export { handleSubmit } // export is what allows us to import the file within the index.js file
