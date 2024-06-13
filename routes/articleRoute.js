import express from "express";
import { Router } from "express";
import { getArticles } from "../controller/articleController.js";

const articleRouter = Router();



articleRouter.get("/" , getArticles);

export default articleRouter;