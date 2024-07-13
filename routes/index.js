import express from "express";
import { Router } from "express";
import articleRouter from "./articleRoute.js";
import userRouter from "./userRoute.js";
import commentRouter from "./commentRoute.js";
import { welcome } from "../controller/common.js";

const router = Router();
router.use("/articles" , articleRouter);
router.use("/users" , userRouter);
router.use("/" , commentRouter);


export default router;