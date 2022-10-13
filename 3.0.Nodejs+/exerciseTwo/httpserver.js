var http = require("http");
var module = require("./DBModule");
querystring = require("querystring");

var server = http.createServer(function (request, response) {
  data1 = "";
  request.on("data", function (chunk) {
    data1 += chunk;
  });
  request.on("end", function () {
    qs = querystring.parse(data1);
    state = qs["state"];
    result = module.searchCapital(state);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(
      `<html><body><h1>The Capital of ${state} is ${result}</h1></body.</html>`
    );
    console.log("Request received");
  });
});

server.listen(3000);

console.log("Server is running...");
