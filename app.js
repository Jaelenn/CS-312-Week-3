// jshint esversion: 6

// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize the express application
const app = express();

// Serve static files (like CSS and images) from the "public" directory
app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Handle GET request to the root URL ("/")
// Send the signup.html file as the response
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});

// Handle POST request to the root URL ("/")
// Process the form submission
app.post('/', (req, res) => {
    // Extract form data from the request body
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    // Log the form data to the console
    console.log(`Received a signup request from: 
    First Name: ${firstName}, 
    Last Name: ${lastName}, 
    Email: ${email}`);

    // Send a success response back to the client
    res.send(`<h1>Success</h1><p>Thank you for signing up, ${firstName}!</p><a href="/">Go back to the form</a>`);
});

// Start the server and listen on port 3000
// Log a message to the console once the server is up and running
app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
