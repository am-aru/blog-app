import mongoose from "mongoose"

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content : {type : String , required : true},
  author : {type : Schema.Types.ObjectId, ref : "User" , required :true },
  article : {type : Schema.Types.ObjectId , ref : "Article" , required :true},
}, {timestamps : true});

const Comment = mongoose.model('Comment' , commentSchema);

   export default Comment;