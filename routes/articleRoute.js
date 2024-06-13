import express from "express";
import { Router } from "express";
import { createArticle, deleteArticle, getArticleById, getArticles, updateArticle } from "../controller/articleController.js";

const articleRouter = Router();



articleRouter.get("/" , getArticles);
articleRouter.get("/:id", getArticleById);
articleRouter.post("/" , createArticle);
articleRouter.put("/:id" , updateArticle);
articleRouter.delete("/:id" , deleteArticle);

export default articleRouter;