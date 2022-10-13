var http = require("http");
var g = require("./greetings");

var server = http.createServer(function (request, response) {
  var result = g.greetings();
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(result);
});

server.listen(3000);
console.log("Server is running...");
