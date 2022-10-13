var http = require("http");
var c = require("./capital");
url = require("url");

querystring = require("querystring");

var server = http.createServer(function (request, response) {
  var path = url.parse(request.url).pathname;
  var query = url.parse(request.url).query;
  var state = querystring.parse(query)["state"];

  result = c.searchCapital(state.toLowerCase());
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(
    `<html><body><h1>The Capital of ${state} is ${result}</h1></body.</html>`
  );
  console.log("Request received");
});

server.listen(3000);
console.log("Server is running");
