const express = require('express');
const router = require('./routes/routing');
const app = express();
const errorLogger = require('./errors/errorlogger');

// Custome logger middleware
/* const mylogger = function (req, res, next) {
  console.log(`Req method is ${req.method}`);
  console.log(`Req url is ${req.url}`);
  next();
}; */

// using app object make use of logger middleware function
// app.use(mylogger);

app.all('*', (req, res, next) => {
  let err = new Error();
  err.message = 'Invalid Route';
  err.status = 404;
  next(err);
});

// app.use('/', router);
app.use(errorLogger);
app.listen(3000);
console.log('Server listening in port 3000');

module.exports = app;
