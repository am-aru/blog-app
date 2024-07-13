import express from "express";
import { Router } from "express";
import { deleteCommentById, getCommentsByArticleId, newComment } from "../controller/commentController.js";

const commentRouter = Router();


commentRouter.get("/:id" ,getCommentsByArticleId);
commentRouter.post('/articles/:articleId/comments', newComment);
commentRouter.delete("/:id" , deleteCommentById);

export default commentRouter;