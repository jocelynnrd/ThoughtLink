const express = require('express'); 
const db = require('./config/connection'); // Connects to the database
const routes = require('./routes'); 

const app = express(); // Starts Express
const PORT = 3001; // The port for the server

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); // Handles data from forms
app.use(routes); // Uses the routes we set up

// Starts the server when the database is ready
db.once('open', () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
