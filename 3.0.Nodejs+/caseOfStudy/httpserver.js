var http = require("http");
var module = require("./DBModule");

var server = http.createServer(function (request, response) {
  result = module.authenticateUser("admin", "admin");
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(`<html><body><h1>${result}</h1></body></html>`);
  console.log("Request Received");
});

server.listen(3000);
console.log("Server Running");
