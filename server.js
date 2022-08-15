//import core module http
const http = require('http');

//use http to create server and store in a variable
//createServer takes a request listener as an argument

const server = http.createServer((req, res) => {
    console.log("Request made");
});

//to get our server to start listening to requests
//invoke the listen() method;
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});

