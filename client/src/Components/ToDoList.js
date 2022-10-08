import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  const { todos, markAsComplete, handleDelete, setTodos } = props;
  return (
    <div className="toDoList">
      <ToDoItem
        todos={todos}
        markAsComplete={markAsComplete}
        handleDelete={handleDelete}
        setTodos={setTodos}
      />
    </div>
  );
};

export default ToDoList;
