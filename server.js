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

    //routing
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            
            res.statusCode = 301; //means resource you're trying to
            //access has been permanently moved and we are going to do 
            //a permanent redirect

            //actual redirection
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //send and html file, read the file first
    fs.readFile(path, (err, data) => {
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

