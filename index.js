const express = require('express');
const userRouter = require("./routes/users/userRoutes.js");
const postRouter = require('./routes/posts/postRoutes.js');
const categoryRouter = require('./routes/categories/categoryRoutes.js');
const commentRouter = require('./routes/comments/commentRoutes.js');
require('dotenv').config();
require("./config/dbConnect.js")

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/comments', commentRouter);

app.listen(PORT, () => {
  console.log(`Server running on por: ${PORT}`)
})
