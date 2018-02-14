const http = require('http');
const url = require('url');
const jsonDB = require('node-json-db');

const logger = require('./logger');

const db = new jsonDB("messages", true, true);

const server = http.createServer(function(req, res){

    console.log('serving request :' + req.url);

    logger.info('service request logged by winston :' + req.url);

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    const queryData = url.parse(req.url, true).query;

    console.log('data at root', db.getData("/"));

    let id = 0;
    if (db.getData("/")) {

        let keysLength = Object.keys(db.getData("/")).length;

        console.log('keys length is ' + keysLength);
        id = keysLength;
    }

    try {
        console.log('data in the db is :', db.getData("/message"));
    } catch(error) {

        console.log('logging error as there is no data in db yet');
    }

    if (queryData.message) {    
        console.log('Message is  :' + queryData.message);

        db.push("/messages" + id, {"content": queryData.message});
        res.write('This message is received on the server :[' + queryData.message + ']');
    } else {
        console.log('no message sent');
        res.write('Looks like you have forgotten to send a welcome message to server');
    }    

    res.end();

});

console.log('starting node server on port 3000');

server.listen(3000);

console.log('Server started');