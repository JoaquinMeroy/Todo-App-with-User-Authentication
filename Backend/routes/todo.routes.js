import express from "express"
import { authMiddleware } from "../middleware.js";
import { createTodoItem, deleteTodoItem, getTodoItem, updateTodoItem } from "../controller/todo.controller.js"

const router = express.Router();

router.post("/create", authMiddleware, createTodoItem);

router.get("/get", authMiddleware, getTodoItem);

router.delete("/delete/:id", authMiddleware, deleteTodoItem);

router.put("/update/:id", authMiddleware, updateTodoItem);

export default router