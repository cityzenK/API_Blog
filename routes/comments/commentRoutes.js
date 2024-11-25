import express from 'express';
import { createComment, deleteCommnetByID, getCommentByID, updateComment } from '../../controllers/comments/commentsController.js';

const commentRouter = express.Router();

commentRouter.post('/', createComment);

commentRouter.get('/:id', getCommentByID);

commentRouter.delete('/:id', deleteCommnetByID);

commentRouter.put('/:id', updateComment);

export default commentRouter
