const express = require('express')
const axios = require('axios')
const app = express()

app.get('/info', async (req, res) => {
  const result = await axios.get('http://localhost:3000/employees')
  res.send(result.data)
})

app.listen(3001)