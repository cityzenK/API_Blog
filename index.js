import express from "express";
import userRouter from "./routes/users/userRoutes.js";
import postRouter from "./routes/posts/postRoutes.js";
import categoryRouter from "./routes/categories/categoryRoutes.js";
import commentRouter from "./routes/comments/commentRoutes.js";
import dotdev from "dotenv"

import dbConnect from "./config/dbConnect.js";

dotdev.config()


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
