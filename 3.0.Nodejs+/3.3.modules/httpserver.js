var http = require("http");
var module = require("./DBModule");

var server = http.createServer(function (request, response) {
  result = module.authenticateUser("admin", "admin1");
  response.writeHead(200, { "Content-Type": "text.html" });
  response.end(`<html><body><h1>${result}</h1></body></html>`);
  console.log("Request received");
});

server.listen(3000);
console.log("Server running");
