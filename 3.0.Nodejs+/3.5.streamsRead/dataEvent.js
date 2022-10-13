var fs = require("fs");
var readStream = fs.createReadStream("test.txt");
var data = "";

readStream.on("data", function (chunk) {
  data += chunk;
});

readStream.on("end", function () {
  console.log(data);
});
