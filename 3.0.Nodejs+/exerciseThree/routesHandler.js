exports.loginAdmin = function (url, request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("<h1>Welcome Admin</h1>");
  response.end();
};

exports.loginGuest = function (url, request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("<h1>Welcome Guest</h1>");
  response.end();
};

exports.loginUser = function (url, request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("<h1>Welcome User</h1>");
  response.end();
};
