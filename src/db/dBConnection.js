import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import dotenv from "dotenv";
dotenv.config();
const connectDb = async()=>{ 
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    }catch(err){
        console.log("Mongo db connection Failed : ",err);
        process.exit(1)
    }
}


export default connectDb;