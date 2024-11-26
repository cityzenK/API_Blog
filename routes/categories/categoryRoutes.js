import express from 'express';
import { createCategorie, deleteCategorie, getCategorie, updateCategorie } from '../../controllers/categories/categoriesController.js';
import { isAuth } from '../../middlewares/middle.js';

const categoryRouter = express.Router();

categoryRouter.use(isAuth);

categoryRouter.post("/", createCategorie);

categoryRouter.get("/:id", getCategorie);

categoryRouter.delete("/:id", deleteCategorie);

categoryRouter.put('/:id', updateCategorie);

export default categoryRouter
