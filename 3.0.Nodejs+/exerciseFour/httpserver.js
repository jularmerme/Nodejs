var http = require("http");
var fs = require("fs");

var server = http
  .createServer(function (request, response) {
    msg = "This is a great Book";
    fs.appendFile("./reviews.txt", msg, function (err, html) {
      if (err) {
        throw err;
      }
    });
    fs.readFile("./reviews.txt", function (err, html) {
      if (err) {
        throw err;
      }
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  })
  .listen(3000);

console.log("Server running....");
