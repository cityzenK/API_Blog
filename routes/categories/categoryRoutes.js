import express from 'express';
import { createCategorie, deleteCategorie, getCategorie, updateCategorie } from '../../controllers/categories/categoriesController.js';

const categoryRouter = express.Router();

categoryRouter.post("/", createCategorie);

categoryRouter.get("/:id", getCategorie);

categoryRouter.delete("/:id", deleteCategorie);

categoryRouter.put('/:id', updateCategorie);

export default categoryRouter
