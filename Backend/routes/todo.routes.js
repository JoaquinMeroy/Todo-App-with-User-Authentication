import express from "express"
import { authMiddleware } from "../middleware.js";
import { createTodoItem } from "../controller/todo.controller.js"

const router = express.Router();

router.post("/create", authMiddleware, createTodoItem)

export default router