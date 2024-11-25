import express from 'express';
import { createPost, deletePost, getAllPosts, getPostByID, updatePostbyID } from '../../controllers/posts/postsController.js';

const postRouter = express.Router();

postRouter.post('/', createPost);

postRouter.get('/:id', getPostByID);

postRouter.get('/', getAllPosts);

postRouter.delete('/:id', deletePost);

postRouter.put('/:id', updatePostbyID);

export default postRouter

