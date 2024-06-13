import mongoose from "mongoose"

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title :{type : String , required : true },
  description : String,
  tags : [ String ],
   author : {type : Schema.Types.ObjectId, ref : "User" , required :true },
   comments : {type : Schema.Types.ObjectId, ref : "Comment"}
    } , {timestamps : true});

    const Article = mongoose.model('Article' , articleSchema);

    export default Article;