function handleSubmit(event) {
    //event.preventDefault()

    console.log("handleSubmit entered");

    fetch("http://localhost:8080/test").then(res => res.json()).then(function(res) {console.log(res)});

    //postData("http://localhost:8080/add").then(function(res) {console.log(res)});

    /*
    (async () => {
        const rawResponse = await fetch('http://localhost:8080/add', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({a: 1, b: 'Textual content'})
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })();
      */
      

    //document.getElementById('results').innerHTML = "dddd";
    // Check what text was put into the form field
    //let formText = document.getElementById('name').value = "nnnn";
    //formText = "dddd";
    
    //Client.checkForName(formText)

    //console.log("::: Form Submitted :::")
    //fetch('http://localhost:8081/test')
    //.then(res => res.json())
    //.then(function(res) {
    //    document.getElementById('results').innerHTML = res.message
    //})

    console.log("handleSubmit done");
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
    // return await response.json();
    
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log('error', error);
    };
    
};



export { handleSubmit } // export is what allows us to import the file within the index.js file


