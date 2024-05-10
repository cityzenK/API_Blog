const express = require('express');

const postRouter = express.Router();

postRouter.post('/', async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "post created"
    });
  } catch (error) {
    res.json(error.message);
  }
});

postRouter.get('/:id', async (req, res) => {
  const post = req.params;
  try {
    res.json({
      status: "sucess",
      data: `get post: ${post.id}`,
    });
  } catch (error) {
    res.json(error.message);
  }
});

postRouter.get('/', async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "get all posts",
    });
  } catch (error) {
    res.json(error.message);
  }
});

postRouter.delete('/:id', async (req, res) => {
  const post = req.params;
  try {
    res.json({
      status: "success",
      data: `post ${post.id} deleted`,
    });
  } catch (error) {
    res.json(error.message);
  }
});

postRouter.put('/:id', async (req, res) => {
  const post = req.params;
  try {
    res.json({
      status: "sucess",
      data: `post ${post.id} updated`
    });
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = postRouter;
