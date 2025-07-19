
import express from "express";
import { userLogin, userRejister } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/",userRejister);
userRouter.post("/login", userLogin)

export default userRouter;