const express = require("express");
const { home, createTodo, getTodo, deleteTodo } = require("../controllers/todoControllers");
const router = express.Router();

// Routes
router.get("/", home);
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.delete("/deleteTodo/:id", deleteTodo);
// router.post("/creatTasks/:id", creatTasks);

module.exports = router;