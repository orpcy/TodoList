import React, { useEffect, useState } from "react";
import ToDoForm from "./Components/ToDoForm.js";
import ToDoList from "./Components/ToDoList.js";
import { ToastContainer, toast } from "react-toastify";
import { createUser, fetchTodo, login } from "./Utils/helpers.js";

import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import LoginModal from "./Utils/LoginModal.js";
import RegisterModal from "./Utils/RegisterModal.js";
import _default from "react-bootstrap/esm/CardGroup.js";

const App = () => {
  const [todos, setTodos] = useState([]);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const [emmptyText, setEmptyText] = useState(true);

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setInputs({
      ...inputs,
      [evt.target.name]: value,
    });
  };

  const [displayName, setDisplayName] = useState("");

  const { username, email, password } = inputs;

  const register = (e) => {
    e.preventDefault();
    createUser(inputs).then((resp) => {
      if (resp.error) toast.error(resp.error);
      if (resp._id) {
        toast.success("Registration successful!");
        localStorage.setItem("userId", resp._id);
        localStorage.setItem("username", resp.username);
        setInputs({ username: "", email: "", password: "" });
        setEmptyText(false);
        handleCloseRegister();
      }
    });
  };

  const loginUser = (e) => {
    e.preventDefault();
    login(inputs).then((resp) => {
      if (resp.error) toast.error(resp.error);
      if (resp._id) {
        toast.success("Logged in successfully!");
        localStorage.setItem("userId", resp._id);
        localStorage.setItem("username", resp.username);
        fetchTodo(resp._id).then((todoItems) => setTodos(todoItems));
        setInputs({ email: "", password: "" });
        setEmptyText(false);
        handleCloseLogin();
      }
    });
  };

  const logout = () => {
    setDisplayName("");
    setTodos([]);
    setEmptyText(true);
    localStorage.clear();
  };

  useEffect(() => {
    const getId = localStorage.getItem("userId");
    if (getId)
      fetchTodo(getId).then((todoItems) => {
        setTodos(todoItems);
        setEmptyText(false);
      });
  }, []);

  useEffect(() => {
    const getUsername = localStorage.getItem("username");
    if (getUsername) {
      setDisplayName(localStorage.getItem("username"));
      setEmptyText(false);
    }
  }, [showRegister, showLogin]);

  const dayTime = new Date().getHours();

  return (
    <div className="App">
      <ToastContainer
        draggable
        autoClose={2000}
        icon={true}
      />
      <header>
        <nav>
          <h4>
            {displayName !== "" ? (
              <span>
                Hi {displayName}.{" "}
                {dayTime < 12
                  ? "Good Morning!"
                  : dayTime > 12
                  ? "Good Afternoon!"
                  : dayTime > 18
                  ? "Good Evening!"
                  : null}
              </span>
            ) : (
              <span>Hi Anonymous.</span>
            )}
          </h4>
          <div />
          <div>
            {displayName != "" ? (
              <span onClick={logout}>Logout</span>
            ) : (
              <>
                <span onClick={handleShowLogin}>Login</span>
                <span onClick={handleShowRegister}>Register</span>
              </>
            )}
          </div>
        </nav>
      </header>
      <main>
        <ToDoForm todos={todos} setTodos={setTodos} />
        <ToDoList todos={todos} setTodos={setTodos} />
        {emmptyText && <p className="text-info">Sign in to manage tasks!</p>}
      </main>

      <LoginModal
        show={showLogin}
        handleClose={handleCloseLogin}
        email={email}
        password={password}
        handleChange={handleChange}
        loginUser={loginUser}
      />
      <RegisterModal
        show={showRegister}
        handleClose={handleCloseRegister}
        username={username}
        email={email}
        password={password}
        handleChange={handleChange}
        register={register}
      />
    </div>
  );
};

export default App;
