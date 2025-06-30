
import express from "express";
import { userRejister } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/",userRejister);

export default userRouter;