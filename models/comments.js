import mongoose from "mongoose"

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  content : {type : String , required : true},
  author : {type : Schema.Types.ObjectId, ref : User , required :true },
  article : {type : Schema.Types.ObjectId , ref : Article , required :true},
}, {timestamps : true});

const Comment = mongoose.model('Comment' , articleSchema);

    module.exports = Comment;