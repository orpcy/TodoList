import React, { useState } from "react";

const ToDoForm = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => setTodo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(todo);
    setTodo("");
  };
  return (
    <div className="toDoform">
      <div className="form-head">
        <h2>To Do: </h2>
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={todo}
            name="todo"
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ToDoForm;
