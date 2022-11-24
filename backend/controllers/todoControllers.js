const Todo = require("../models/TodoSchema");

exports.home = (req, res) => {
  res.send("Hello Home Controller")
}


exports.createTodo = async (req, res) => {
  try {
    const { todotitle } = req.body;
    // To validate whether Todotitle is empty or not
    if (!todotitle) {
      throw new Error("Todo title is required");
    }
    // To check Todo is unique or not
    const existingTodoTitle = await Todo.findOne({ todotitle });

    if (existingTodoTitle) {
      throw new Error("Todo alredy exits in database");
    }

    // Insert the Todo into Datbase
    const todo = await Todo.create({ todotitle });
    res.status(200).json({
      success: true,
      message: "Todo successfully insertted into database",
      todo
    });
  }
  catch (error) {
    console.log(error);
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todotitle = await Todo.find();
    res.status(200).json({
      success: true,
      message: "Todo details succesfullt fectched",
      todotitle
    });
  }
  catch (err) {
    console.log(err);
    res.status(400).json({
      success: false.valueOf,
      message: err.message
    })
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const deletodTodo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "TODO deleted sucessfully",
    })
  }
  catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message
    })
  }
};


// exports.createTodo = async (req, res) => {
//   try {
//     const newTodo = new Todo({
//       title: req.body
//     })
//     const createNewTodo = await Todo.create({ newTodo });
//     res.status(200).json({
//       success: true,
//       message: "Todo Created Successfully",
//       createNewTodo
//     })
//   } catch (err) {
//     console.log(err.message);
//     res.status(400).json({
//       success: false,
//       message: err.message
//     })
//   }
// }



// exports.creatTasks = async (req, res) => {
//   const todoId = req.params.todoId;
//   const todo = await Todo.findById(todoId);
//   if (!todo) return res.status(400).send("No Todo exits");

//   const { text } = req.body;
//   todo.tasks.push(text);
//   await todo.save()
//   res.json(todo)
// }

