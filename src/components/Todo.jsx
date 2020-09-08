import React from "react";
import firebase from "../util/firebase";

const Todo = ({ todo }) => {
  const completeTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      completed: !todo.completed,
    });
  };

  const deleteTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.remove();
  };

  return (
    <div>
      <h1
        style={{ marginBottom: "5px" }}
        className={`subtitle is-4 ${
          todo.completed ? "complete" : "incomplete"
        }`}
      >
        {todo.title}
      </h1>
      <div className="buttons" style={{ justifyContent: "center" }}>
        <button onClick={completeTodo} className="button is-success">
          Complete
        </button>
        <button onClick={deleteTodo} className="button is-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
