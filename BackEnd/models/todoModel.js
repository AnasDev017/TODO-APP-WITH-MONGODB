import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todoText:{
        type:String,
    }
},{timestamps: true})

const todoModel = new mongoose.model("Todos", todoSchema)
export default todoModel;