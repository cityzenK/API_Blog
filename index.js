const express = require('express');
const userRouter = require("./routes/users/userRoutes.js");
const postRouter = require('./routes/posts/postRoutes.js');
require('dotenv').config();
require("./config/dbConnect.js")

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter)

app.listen(PORT, () => {
  console.log(`Server running on por: ${PORT}`)
})
