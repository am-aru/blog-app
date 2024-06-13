import mongoose from "mongoose";
import { username , password } from "./server.config.js";

export default async function connectToDb(){
  try{
    await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.3rwxfs2.mongodb.net/blog-app`)
      console.log("db is connected");
      
    } catch(err) {
      console.log(err);
    }
  }
 
