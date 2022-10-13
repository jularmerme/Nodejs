var routeHandler = require("./routesHandler");

exports.enableRoutes = function (url, request, response) {
  var pathname = url.pathname;
  console.log("url_parts.pathname: " + url.pathname);

  switch (pathname) {
    case "/admin":
      routeHandler.loginAdmin(pathname, request, response);
      break;
    case "/guest":
      routeHandler.loginGuest(pathname, request, response);
      break;
    case "/user":
      routeHandler.loginUser(pathname, request, response);
      break;
    default:
      routeHandler.loginAdmin(pathname, request, response);
  }
};
