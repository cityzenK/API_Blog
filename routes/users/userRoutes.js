import express from 'express';
import { loggerMiddleware, headerMiddleware } from '../../middlewares/middle.js';
import { deleteUserbyID, userProfile, logginUser, updateUserbyID, userController, userRegisterCtrl } from '../../controllers/users/userController.js';

const userRouter = express.Router();

userRouter.use(loggerMiddleware, headerMiddleware)

userRouter.post("/register", userRegisterCtrl);

userRouter.post("/login", logginUser);

userRouter.get("/", userController);

userRouter.get("/profile/:id", userProfile);

userRouter.delete("/:id", deleteUserbyID);

userRouter.put("/:id", updateUserbyID);

export default userRouter
