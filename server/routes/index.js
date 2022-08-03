const express = require("express");
const {
  getAllToDo,
  addToDo,
  deleteToDo,
  markAsComplete,
} = require("../controllers/todoController");
const app = express();

app.get("/todo", getAllToDo);
app.post("/todo", addToDo);
app.delete("/todo/:_id", deleteToDo);
app.put("/todo/:_id", markAsComplete);

module.exports = app;
