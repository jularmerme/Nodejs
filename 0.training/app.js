const express = require("express");

const app = express();

function middlewareOne(req, res, next) {
  req.customProperty = 100;
  next();
}

function middlewareTwo(req, res, next) {
  console.log(`The custom property value is: ${req.customProperty}`);
  req.customProperty = 500;
  next();
}

function errorHandler(err, req, res, next) {
  if (err) {
    res.json({ msg: err });
    // res.send('<h2>There was an error, please try again</h2>')
  }
}

app.use(middlewareOne);
app.use(middlewareTwo);

app.get("/", (req, res, next) => {
  res.send(`<h1>The value is ${req.customProperty}</h1>`);
});

app.use(errorHandler);

app.listen(3000);
