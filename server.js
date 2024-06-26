import "dotenv/config";
import express from "express";
import { port } from "./server.config.js";
import morgan from "morgan";
import connectToDb from "./db.js";
import router from "./routes/index.js";


 
 const app = express();

 connectToDb();
 app.use(morgan("tiny"));
 app.use(express.json());
 app.use('/' , router);
 



app.listen(port , () => {
  console.log("server is listening" + port);
})