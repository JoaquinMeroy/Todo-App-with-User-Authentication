import { get } from "mongoose";
import Todo from "../models/todo.model.js";

// POST
export const createTodoItem = async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
      completed: req.body.completed ?? false,
      userId: req.userId
    });

    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// GET
export const getTodoItem = async (req, res) => {
  try {
    const getTodo = await Todo.find({ userId: req.userId });
    res.status(200).json(getTodo);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// DELETE
export const deleteTodoItem = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete({
      _id: req.params.id,
      userId: req.userId
    })
    if (!deletedTodo) return res.status(404).json({ message: "Item not found" });
    res.status(200).json(deletedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// UPDATE
export const updateTodoItem = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      {
        _id: req.params.id,
        userId: req.userId
      },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedTodo) return res.status(404).json({ message: "Item not found" })
    res.status(200).json(updatedTodo)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}