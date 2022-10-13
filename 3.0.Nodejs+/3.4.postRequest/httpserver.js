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
    name = qs["username"];
    password = qs["password"];
    result = module.authenticateUser(name, password);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`<html><body><h1>${result}</h1></body></html>`);
  });
});

server.listen(3000);

console.log("Server is running...");
