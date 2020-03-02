// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// our first Route:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/Home.html');
});

app.get('/elon', (request, response, next) => {
    response.sendFile(__dirname + '/views/elon.html');
  });

app.get('/works', (request, response, next) => {
   response.sendFile(__dirname + '/views/works.html');
 });
  

// Make everything inside of public/ available
app.use(express.static('public'));

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});