function handleSubmit(event) {
    event.preventDefault()

    console.log("handleSubmit called");

    fetch("/test");

    // Check what text was put into the form field
    /*
    let formText = document.getElementById('name').value;
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    */
} 

export { handleSubmit } // export is what allows us to import the file within the index.js file


