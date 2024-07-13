import mongoose from "mongoose"

const Schema = mongoose.Schema;

const likeSchema = new Schema({
  articleId : {type : Schema.Types.ObjectId , ref : "Article" , required :true},
  userId : {type : Schema.Types.ObjectId, ref : "User" , required :true }
},{timestamps : true});


const Likes = mongoose.model('Likes' , articleSchema);

  export default Likes;