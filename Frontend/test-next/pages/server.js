import Layout from '../components/Layout.js'

var http = require('http');
var fs = require("fs");
 
http.createServer(function(request, response) {
}).listen(3000);
fs.readFile("index.html", function(err, data){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(data);
  response.end();
});
export default server
