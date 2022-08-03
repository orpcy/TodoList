import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  const { todos, markAsComplete, handleDelete } = props;
  return (
    <div className="toDoList">
      <ToDoItem
        todos={todos}
        markAsComplete={markAsComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default ToDoList;
