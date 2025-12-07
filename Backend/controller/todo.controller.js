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
    res.status(400).json({ message: error.message });
  }
}

// GET
export const getTodoItem = async (req, res) => {
  try {

  } catch (error) {

  }
}

// DELETE
export const deleteTodoItem = async (req, res) => {
  try {

  } catch (error) {

  }
}

// UPDATE
export const updateTodoItem = async (req, res) => {
  try {

  } catch (error) {

  }
}