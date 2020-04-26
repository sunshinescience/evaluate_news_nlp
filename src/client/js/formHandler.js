function handleSubmit(event) {
    //event.preventDefault()

    console.log("handleSubmit vvv called");

    //fetch("/test");

    // Check what text was put into the form field
    let formText = document.getElementById('name').value;
    
    Client.checkForName(formText)

    //console.log("::: Form Submitted :::")
    //fetch('http://localhost:8081/test')
    //.then(res => res.json())
    //.then(function(res) {
    //    document.getElementById('results').innerHTML = res.message
    //})
} 

const postData = async (url = '', data = {}) => { 
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data), 
    });

    /*
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log('error', error);
    };
    */
};

// Add some data to our app endpoint as a test. 
//postData('/add', {userResp: 'warm'});

export { handleSubmit } // export is what allows us to import the file within the index.js file


