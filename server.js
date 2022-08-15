//import core module http
const http = require('http');

//use http to create server and store in a variable
//createServer takes a request listener as an argument

const server = http.createServer((req, res) => {
    console.log("Request made");
});

//to get our 

