//import core module http
const http = require('http');
const fs = require('fs'); //require file system moddule

//use http to create server and store in a variable
//createServer takes a request listener as an argument

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html'); //we are sending back
    //some plain text

    //send and html file, read the file first
    fs.readFile('./views/index.html', (err, data) => {
        if(err) {
            console.log(err);
            res.end(); //to avoid keeping the request hanging
        }
        else {
           // res.write(data); //sends html page to the browser
            res.end(data);
        }
    })


});

//to get our server to start listening to requests
//invoke the listen() method;
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});

