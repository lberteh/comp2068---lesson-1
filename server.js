  {
    "vid": "20170303962",
    "itemCode": "ITEM123",
    "curve": "128,174,141,229,308,204,311,166", 
    "label": "Enter your name", 
    "defaultText": "Avetti Commerce", 
    "maxChar": 30, 
    "fontFamilies": ["font1", "font2", "font3"],
    "defaultFontFamily": "font1", 
    "fontSizes": [16, 18, 20, 22, 24], 
    "defaultFontSize": 20 
}

















// link to the http library that comes with node
var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200); // status ok
    response.end('First Node Page');
}).listen(3000);

console.log('Server Running on port 3000');
