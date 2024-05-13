const express = require('express');

const categoryRouter = express.Router();

categoryRouter.post("/", async () => {
  try {
    res.json({
      status: "success",
      data: "category created",
    });
  } catch (error) {
    res.json(error.message);
  }
});

categoryRouter.get("/:id", async (req, res) => {
  const category = req.params;
  try {
    res.json({
      status: "success",
      data: `category: ${category.id} route`,
    })
  } catch (error) {
    res.json(error.message);
  }
});

categoryRouter.delete("/:id", async (req, res) => {
  const category = req.params;
  try {
    res.json({
      status: "success",
      data: `category ${category.id} deleted`,
    })
  } catch (error) {
    res.json(error.message);
  }
});

categoryRouter.put('/:id', async (req, res) => {
  const category = req.params;
  try {
    res.json({
      status: "success",
      data: `category ${category.id} update`,
    })
  } catch (error) {
    res.json(error.message);
  }
});


module.exports = categoryRouter;
