import React from "react";
import "../node_modules/bulma/css/bulma.min.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export const App = () => {
  return (
    <div className="container has-text-centered" style={{ height: "100vh" }}>
      <h1 className="title is-1">Todo with Firebase🔥</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};
