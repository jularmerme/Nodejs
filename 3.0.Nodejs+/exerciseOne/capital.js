exports.searchCapital = function (state) {
  // let s = state.toLowerCase();
  switch (state) {
    case "alabama":
      return "Montgomery";
      break;
    case "alaska":
      return "Juneau";
      break;
    case "arizona":
      return "phoenix";
      break;
    case "arkansas":
      return "Little Rock";
      break;
    case "california":
      return "Sacramento";
      break;
    case "colorado":
      return "Denver";
      break;
    default:
      return "The Data wasn't found in the DB";
  }
};
