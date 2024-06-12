import mongoose from "mongoose"

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  name : String,
  email : String,
  age : Number
});

const User = mongoose.model('User' , articleSchema);

    module.exports = User;