import Comment from "../models/commentsModel.js";
import Article from "../models/articlesModel.js";
import { addCommentOnArticle, deleteCommentFromArticle } from "./articleController.js";

export async function getCommentsByArticleId(req, res) {
  try {
    const comments = Comment.find(req.params.articleId);
    res.status(200).json(comments);
  } catch (error) {
    console.log("Error fetching comment:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function newComment(req, res) {
  const { body } = req;
  const { articleId } = body;
    try {
    const newComment = new Comment(body);
    const isArticleUpdated = await addCommentOnArticle(
      res,
      articleId,
      newComment
    );

    
    if (isArticleUpdated) {
      await newComment.save();
      res.status(201).end();
    }
  } catch (error) {
    console.log("Error adding comment to article:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteCommentById(req, res) {
  const { articleId, commentId } = req.params;
  try {
    await Comment.findByIdAndDelete(commentId);
    const isCommentDeleted = await deleteCommentFromArticle(
      res,
      articleId,
      commentId
    );
    if (isCommentDeleted) {
      res.status(204).end();
    }
  } catch (error) {
    console.log("Error deleting comment:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}



