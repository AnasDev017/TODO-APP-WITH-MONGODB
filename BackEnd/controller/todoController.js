import todoModel from "../models/todoModel.js";

// CREATE
export const createTodo = async (req, res) => {
  try {
    const { todoText } = req.body;
    const newTodo = new todoModel({ todoText });
    await newTodo.save();
    res.status(201).json({ message: "Added Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// GET
export const getTodos = async (req, res) => {
  try {
    const todos = await todoModel.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// DELETE
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await todoModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// EDIT 
export const editTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { todoText } = req.body;

    const updatedTodo = await todoModel.findByIdAndUpdate(
      id,
     { todoText },
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Updated Successfully", updatedTodo });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
