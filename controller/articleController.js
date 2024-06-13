import Article from "../models/articlesModel.js";

export async function getArticles(req, res) {
 try{
  const articles = await Article.find();
  res.json(articles);
  } catch(err){
  res.status(500).json(err.message);
 }
};

export async function getArticleById(req , res){
  let articles = await articles.find
}