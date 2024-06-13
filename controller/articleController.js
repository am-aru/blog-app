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
  try {
    let article = await Article.findById(req?.params?.id).populate('Comment').exec().lean();
    console.log(article);
    if(article === null){
      res.status(404).json({message: "article not found"})
    }else{
      res.status(200).json(article);
    }
    } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

export async function createArticle(req, res) {
  try {
    const article = await Article.create(req?.body);
    res.status(200).json(article);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

export async function updateArticle(req, res) {
  console.log(req);
  try {
    let updatedArticle = await Article.findByIdAndUpdate(req?.params?.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedArticle);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

export async function deleteArticle(req, res) {
  console.log(req);
  try {
    await Article.findByIdAndDelete(req?.params?.id);
    res.status(204).json({ isDeleted: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};