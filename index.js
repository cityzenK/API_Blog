const express = require('express');
require('dotenv').config();
require("./config/dbConnect.js")

const app = express();

const PORT = process.env.PORT;

app.use('/', (req, res) => {
  console.log('Hello World');
  return res.send('Hello World');
})

app.listen(PORT, () => {
  console.log(`Server running on por: ${PORT}`)
})
