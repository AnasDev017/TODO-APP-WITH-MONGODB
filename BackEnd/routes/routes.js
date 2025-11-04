import { Router } from "express";
import { createTodo , getTodos,deleteTodo,editTodo} from "../controller/todoController.js";

const router = Router();

router.post("/saveTodo", createTodo);
router.get("/getTodos", getTodos);
router.delete("/deleteTodo/:id", deleteTodo);
router.put("/editTodo/:id", editTodo);
export default router;