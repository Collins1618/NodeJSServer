//import core module http
const http = require('http');

//use http to create server and store in a variable
//createServer takes a request listener as an argument

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html'); //we are sending back
    //some plain text

    res.write('<p>Hello, ninjas</p>')
    res.write('<p>Hello again, ninjas</p>')
    res.end(); //end the response for it to be sent back
});

//to get our server to start listening to requests
//invoke the listen() method;
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});

