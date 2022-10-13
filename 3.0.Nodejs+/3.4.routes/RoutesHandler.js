var module = require("./DBModule");
var url = require("url");
var querystring = require("querystring");

exports.display_login = function (url, request, response) {
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
};

exports.display_signup = function (url, request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  var html = `
  <body bgcolor="#E2C2F6">
    <center>
      <h1>infoSys Book Cart</h1>
      <h4>SignUp</h4>
      <form name="myform" action="http://localhost:3000/register" method="post">
        <table>
          <tr>
            <td>UserName: </td>
            <td><input type="text" name="username" value=""></td>
          </tr>
          <tr>
            <td>Password: </td>
            <td><input type="password" name="password" value=""></td>
          </tr>
          <tr>
            <td>Confirm Password: </td>
            <td><input type="text" name="confirmpassword" value=""></td>
          </tr>
          <tr>
            <td>Address: </td>
            <td><input type="text" name="address" value=""></td>
          </tr>
          <tr>
            <td></td>
            <td><input type="submit" name="" value="Register"></td>
          </tr>
        </table>
      </form>
    </center>
  </body>`;
  response.write(html);
  response.end();
};
