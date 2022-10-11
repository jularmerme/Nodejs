const express = require('express')
const bodyparser = require('body-parser')
const myReqLogger = require('./Utilities/requestLogger');
const route = require('./Routes/routing');
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

const app = express()
app.use(bodyparser.json())
app.use(myReqLogger)

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: 'My Notes',
      description: 'This is REST API application created with Exoress. It help to fetch, create, update and delete notes',
      version: '1.0.0',
      contact: {
        name: "Alex Bell",
        url: "https://www.somealex.com"
      },
      servers: ['http://localhost:3000']
    }
  },
  apis:['./Routes/routing.js']
}

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', route)

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}...`)
});