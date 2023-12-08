// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

// (async() => {
//     try{

//     }
//     catch(error){
//         console.log('Error',error);
//         throw err
//     }
// })()
