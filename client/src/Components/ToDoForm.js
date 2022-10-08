import React, { useState } from "react";
import { addTodo } from "../Utils/helpers";

const ToDoForm = (props) => {
  const [todo, setTodo] = useState("");
  const { todos, setTodos } = props;

  const handleChange = (e) => setTodo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    if (userId) {
      const data = { userId, task: todo };
      addTodo(data).then((resp) => setTodos([...todos, resp]));
      setTodo("");
    }
  };
  return (
    <div className="toDoform">
      <div className="form-head">
        <h2 className="mb-0">To Do: </h2>
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={todo}
            name="todo"
            onChange={handleChange}
            className="form-control"
            rows={1}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ToDoForm;
