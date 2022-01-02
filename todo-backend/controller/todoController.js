const { Todo } = require("../model/Todo");
// CREATE_TODO

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (error) {
    res.json(error);
  }
};

//   FETCH_TODOS
const fetchTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.json(error);
  }
};

// FETCH_TODO
const fetchTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        res.json(todo)
    } catch (error) {
        res.json(error)
    }
}

// UPDATE_TODO
const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description
            },
            {
                new: true,
                runValidators: true,
            }
        );
        res.json(todo)
    } catch (error) {
        res.json(error)
    }
}

module.exports = { createTodo, fetchTodos, fetchTodo, updateTodo };
