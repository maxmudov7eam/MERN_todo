const express = require("express");
const { createTodo, fetchTodos, fetchTodo, updateTodo } = require("../controller/todoController");
const route = express.Router();


route.post("/todos", createTodo);
route.get("/todos", fetchTodos);
route.get("/todos/:id", fetchTodo);
route.get("/todos/:id", fetchTodo);
route.put("/todos/:id", updateTodo);

module.exports = { route }