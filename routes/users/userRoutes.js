const express = require('express');

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user register",
    });
  } catch (error) {
    res.json(error.message);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user login",
    });
  } catch (error) {
    res.json(error.message);
  }
});

userRouter.get("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "profile route",
    })
  } catch (error) {
    res.json(error.message)
  }
});

userRouter.get("/profile/:id", async (req, res) => {
  try {
    const user = req.params;
    res.json({
      status: "success",
      data: `profile of user ${user.id}`,
    })
  } catch (error) {
    res.json(error.message)
  }
});

userRouter.delete("/:id", async (req, res) => {
  try {
    const user = req.params
    res.json({
      status: "success",
      data: `delete user profile ${user.id}`,
    })
  } catch (error) {
    res.json(error.message)
  }
});


userRouter.put("/:id", async (req, res) => {
  try {
    const user = req.params
    res.json({
      status: "success",
      data: `update user profile ${user.id}`,
    })
  } catch (error) {
    res.json(error.message)
  }
});

module.exports = userRouter;
