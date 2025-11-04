import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async ()=>{
    try {
        mongoose.connect(process.env.DATA_BASE_URL)
        console.log("mongoDB Connected!");
    } catch (error) {
        console.log("err",error.massege);
    }
}
export default connectDB;