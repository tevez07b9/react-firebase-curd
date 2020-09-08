import React, { useState, useEffect } from "react";
import firebase from "../util/firebase";
import Todo from "./Todo";

const TodoList = () => {
  const [todolist, setTodoList] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);

  return (
    <div>
      {console.log(todolist)}
      {todolist ? (
        todolist.map((todo) => <Todo todo={todo} key={todo.id} />)
      ) : (
        <h2 className="subtitle is-3">fetching todos...</h2>
      )}
    </div>
  );
};

export default TodoList;
