exports.authenticateUser = function (username, password) {
  if (username === "admin" && password === "admin") {
    return "Valid User";
  } else {
    return "Invalid User";
  }
};
