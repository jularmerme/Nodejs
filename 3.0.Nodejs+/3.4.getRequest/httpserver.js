var http = require("http");
var module = require("./DBModule");
url = require("url");

querystring = require("querystring");

var server = http.createServer(function (request, response) {
  var path = url.parse(request.url).pathname;
  var query = url.parse(request.url).query;
  var name = querystring.parse(query)["username"];
  var password = querystring.parse(query)["password"];

  // invoke dbmodule method to validate the username and password
  result = module.authenticateUser(name, password);
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(`<html><body><h1>${result}</h1></body.</html>`);
  console.log("Request Received");
});

server.listen(3000);
console.log("Server running");
