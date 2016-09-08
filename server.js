  // link to the http library that comes with node
var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200); // status ok
    response.end('First Node Page');
}).listen(3000);

console.log('Server Running on port 3000');
