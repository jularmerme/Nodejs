var routeHandler = require("./RoutesHandler");

exports.enableRoute = function (url, request, response) {
  // Get the pathname from the request url
  var pathname = url.pathname;
  console.log("url_parts.pathname" + url.pathname);

  // According to the path name received, invoke the corrsponding function
  switch (pathname) {
    case "/login":
      routeHandler.display_login(pathname, request, response);
      break;
    case "/signup":
      routeHandler.display_signup(pathname, request, response);
      break;
    default:
      routeHandler.display_login(pathname, request, response);
  }
};
