import React from "react";

const ToDoItem = (props) => {
  const { todos, handleDelete } = props;

  return (
    <div className="todo-wrap">
      {todos &&
        todos.map((t, i) => {
          const { _id, task, completed } = t;
          return (
            <div className="item" key={i}>
              <h4 style={{ textDecoration: completed ? "line-through" : "" }}>
                {task}
              </h4>
              <div>
                <span
                  className={completed ? "complete unmark" : "complete"}
                  onClick={() => props.markAsComplete(_id)}
                >
                  <i className="fa-solid fa-circle-check"></i>
                </span>
                <span className="delete" onClick={() => handleDelete(_id)}>
                  <i className="fa-solid fa-circle-xmark"></i>
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ToDoItem;
