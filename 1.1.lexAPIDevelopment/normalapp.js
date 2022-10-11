const express = require('express')
const axios = require('axios')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())

app.get('/employees', (req, res) => {
  res.json([
    { empId: 1234, name: "John", description: "SE" },
    { empId: 4567, name: "Tom", description: "SSE" },
    { empId: 7894, name: "Kevin", description: "TA" },
  ])
})

app.listen(3000)