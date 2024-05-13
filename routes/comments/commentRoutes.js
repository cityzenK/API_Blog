const express = require('express');

const commentRouter = express.Router();

commentRouter.post('/', async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment created",
    });
  } catch (error) {
    res.json(error.message);
  }
});

commentRouter.get('/:id', async (req, res) => {
  const post = req.params;
  try {
    res.json({
      status: "success",
      data: `comment ${post.id} getted`,
    });
  } catch (error) {
    res.json(error.message);
  }
});

commentRouter.delete('/:id', async (req, res) => {
  const comment = req.params;
  try {
    res.json({
      status: "success",
      data: `comment ${comment.id} deleted`,
    });
  } catch (error) {
    res.json(error.message);
  }
});

commentRouter.put('/:id', async (req, res) => {
  const comment = req.params;
  try {
    res.json({
      status: "success",
      data: `comment ${comment.id} updated`,
    });
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = commentRouter;
