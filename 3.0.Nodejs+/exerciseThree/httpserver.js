var http = require("http");
var route = require("./routes");
url = require("url");

http
  .createServer(function (request, response) {
    if (request.url === "/favicon.ico") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end();
      return;
    } else {
      var url_parts = url.parse(request.url);
      route.enableRoutes(url_parts, request, response);
    }
  })
  .listen(3000);

console.log("Server running...");
