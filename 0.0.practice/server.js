const http = require('http');

const server = http.createServer((request, response) => {
  console.log('request starting...');
  response.write('hello client!');
  response.end();
});
