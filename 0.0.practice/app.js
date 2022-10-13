const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

// const errLog = (err, req, res, next) => {
//   console.error(err.stack);
//   res.send('Something broke!');
// };

// app.get('/home/:firstName/:lastName', (req, res) => {
//   res.send(req.query);
//   res.send(req.params);
// });

// app.get('/send-ok', function (req, res) {
//   res.status(200).send({ message: 'Data was submitted successfully.' });
// });

// app.use(errLog);

// const call1 = function (request, response, next) {
//   console.log('Calling 1');
//   next();
// };

// const call2 = function (request, response, next) {
//   console.log('Calling 2');
//   next();
// };

// const call3 = function (request, response, next) {
//   console.log('Calling 3');
//   response.end();
// };

// const call4 = function (request, response, next) {
//   console.log('Calling 4');
//   response.end();
// };

// app.all('/login', [call2, call4, call1, call3]);

// app.get('/', function (req, res) {
//   res.send('hello');
// });

// app.use(function (req, res, next) {
//   res.send('I am middleware');
//   next();
// });

// app.post('/', function (req, res) {
//   res.send('bye');
// });

// app.get('/', function (req, res) {
//   res.send('hello world');
// });

app.get('/abcd', function (req, res) {
  res.send('abcd');
});

app.get('/abc*', function (req, res) {
  res.send('abc*');
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
