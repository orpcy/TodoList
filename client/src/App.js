import React, { useEffect, useState } from "react";
import ToDoForm from "./Components/ToDoForm.js";
import ToDoList from "./Components/ToDoList.js";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  let url;

  let dbUrl = process.env.REACT_APP_API_URL;
  if (dbUrl) {
    url = dbUrl;
  } else {
    url = "";
  }

  const fetchTodo = async () => {
    const response = await fetch(`${url}/todo`);
    const todoItems = await response.json();
    return todoItems;
  };

  useEffect(() => {
    fetchTodo().then((todoItems) => setTodos(todoItems));
  }, []);

  const addTodo = (task) => {
    fetch(`${url}/todo`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ task }),
    })
      .then((res) => res.json())
      .then((resp) => setTodos([...todos, resp]));
  };

  const markAsComplete = (_id) => {
    fetch(`${url}/todo/${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((updated) => {
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
    fetch(`${url}/todo/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deleted) => {
        let newTodo = todos.filter((t) => t._id !== _id);
        setTodos(newTodo);
      });
  };

  return (
    <div className="App">
      <ToDoForm addTodo={addTodo} />
      <ToDoList
        markAsComplete={markAsComplete}
        todos={todos}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
