import express from "express";
import { Router } from "express";

const commentRouter = Router();


commentRouter.get('/' , (req , res) =>{
  res.send("welcome to comments");
});

export default commentRouter;