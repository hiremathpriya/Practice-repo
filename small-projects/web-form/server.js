const http = require('http');

const server = http.createServer(function(req, res){

    console.log('received a request : ' + req.url);

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write(req.url);
    res.end();

});

console.log('starting server on port 3000');
server.listen(3000);