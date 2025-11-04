import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors"
import connectDB from "../BackEnd/config/db.js";
import router from "./routes/routes.js";
const app = express()
dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(cors())

connectDB()
 
app.use("/api",router)
 
app.listen(PORT,() => console.log(`Server running on port ${PORT}`));


