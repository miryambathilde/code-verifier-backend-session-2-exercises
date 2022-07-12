const express = require('express');
const dotenv = require('dotenv');

// Configuration the .evn file
dotenv.config();

/**
Heare we create a new express application
*/
// Instantiate a new express application
const app = express();

// Instance of server PORT
const port = process.env.PORT || 8000;

/**
Here we create the routes of our application
*/

// GET /
app.get('/', (req, res) => {
	// Send Hello World to the client - response body
	res.send('Welcome to APP Express + TS + Swagger + Mongoose');
});

// Execute APP and Listen Request to port
app.listen(port, () => {
	console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});