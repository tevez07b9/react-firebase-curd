import React, { useState } from "react";
import firebase from "../util/firebase";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const createTodo = () => {
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      completed: false,
    };

    todoRef.push(todo);
    setTitle("");
  };

  return (
    <div>
      <div className="field has-addons" style={{ justifyContent: "center" }}>
        <div className="control">
          <input
            className="input"
            type="text"
            value={title}
            onChange={handleOnChange}
            placeholder="Enter todo title..."
          />
        </div>
        <div className="control">
          <button onClick={createTodo} className="button is-info">
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
