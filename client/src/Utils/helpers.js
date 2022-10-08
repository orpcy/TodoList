let url;

let dbUrl = process.env.REACT_APP_API_URL;
if (dbUrl) {
  url = dbUrl;
} else {
  url = "";
}

export const fetchTodo = async (_id) => {
  const response = await fetch(`${url}/todo/${_id}`);
  const todoItems = await response.json();
  return todoItems;
};

export const addTodo = async (data) => {
  const response = await fetch(`${url}/todo`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const newTodo = await response.json();
  return newTodo;
};

export const markAsComplete = async (_id) => {
  const response = await fetch(`${url}/todo/${_id}`, {
    method: "PUT",
  });
  const markComplete = await response.json();
  return markComplete;
};

export const deleteTodo = async (_id) => {
  const response = await fetch(`${url}/todo/${_id}`, {
    method: "DELETE",
  });
  const deleted = await response.json();
  return deleted;
};

export const createUser = async (user) => {
  const response = await fetch(`${url}/user`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const newUser = await response.json();
  return newUser;
};

export const login = async (user) => {
  const response = await fetch(`${url}/user/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const signIn = await response.json();
  return signIn;
};
