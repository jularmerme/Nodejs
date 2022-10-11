const express = require('express');
const winston = require('winston');
var helmet = require('helmet');
const loginfo = { transports: [new winston.transports.Console()] };
const logger = winston.createLogger(loginfo);
logger.log({ message: "Server started", level: "info" });

const app = express()
const session = require('express-session')
app.use(helmet());

const logInfo = {
  transports: [
    new winston.transports.File({
      filename: 'test.log'
    })
  ]
}

const logger2 = winston.createLogger(logInfo)

logger2.info("Server started")

app.use(
  session({
    name: 'my-session',
    cookie: {
      // Current Server time + maxAge = expire datetime
      maxAge: 1000 * 60,

      // Allows for the cookie to be read only by a server (no JS)
      httpOnly: true,

      // Set for the root of the domain
      path: '/',
    },
    secret: 'mypasswordinfy',
  })
);

app.use((req, res, next) => {
  let { visit } = req.session;

  if(!visit) {
    visit = req.session.visit = {
      count: 1,
    };
  } else {
    visit.count++;
  }
  next();
});


app.get('/', (req, res) => {
  res.send(`You viewed this page ${req.session.visit.count} times`);
});

app.listen(3000)
console.log('Server started...running with port 3000')