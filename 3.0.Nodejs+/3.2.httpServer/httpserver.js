var http = require("http");

var server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(
    "<html><body><h1>Hello Welcome to the Node HttpServer!</h1></body></html>"
  );
  response.end();
});

server.listen(3000);
console.log("Server Started. Try to access using the browser");
