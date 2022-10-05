const express = require('express');
const route = require('./routes/routing');

const app = express();
app.use('/', route);

const port = process.PORT || 3000;
app.listen(port, () => {
  console.log(`Adventure Trails App is running on port ${port}...`);
});
