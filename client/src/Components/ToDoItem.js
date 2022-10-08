import React from "react";
import { deleteTodo, markAsComplete } from "../Utils/helpers";

const ToDoItem = (props) => {
  const { todos, setTodos } = props;

  const handleMarkComplete = (_id) => {
    markAsComplete(_id).then((resp) => {
      let newTodo = [...todos];
      newTodo = newTodo.map((n) => {
        if (n._id === _id) {
          if (n.completed) {
            n.completed = false;
          } else {
            n.completed = true;
          }
        }
        return n;
      });

      setTodos(newTodo);
    });
  };

  const handleDelete = (_id) => {
    deleteTodo(_id).then((d) => setTodos(todos.filter((t) => t._id !== _id)));
  };

  return (
    <div className="todo-wrap">
      {todos &&
        todos.map((t, i) => {
          const { _id, task, completed, date } = t;
          return (
            <>
              <div className="item" key={i}>
                <h4 style={{ textDecoration: completed ? "line-through" : "" }}>
                  {task}
                </h4>
                <div>
                  <span
                    className={completed ? "complete unmark" : "complete"}
                    onClick={() => handleMarkComplete(_id)}
                  >
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                  <span className="delete" onClick={() => handleDelete(_id)}>
                    <i className="fa-solid fa-circle-xmark"></i>
                  </span>
                </div>
              </div>
              <div className="task_date">{new Date(date).toLocaleString()}</div>
            </>
          );
        })}
    </div>
  );
};

export default ToDoItem;
