import { useState, useEffect } from "react";
import userAuth from "../hooks/userAuth";
import { toggleTodoStatus, deleteTodo } from "../api/todo";
import { db } from "../firebase/index";

import { collection, query, where, onSnapshot } from "firebase/firestore";

function TodoItem() {
  const [todos, setTodos] = useState([]);

  const { user } = userAuth();

  useEffect(() => {
    if (!user) {
      setTodos([]);
      return;
    }
    const q = query(collection(db, "todo"), where("user", "==", user.uid));

    onSnapshot(q, (querySnapshot) => {
      const todoArr = [];
      querySnapshot.forEach((doc) => {
        todoArr.push({ id: doc.id, ...doc.data() });
      });
      setTodos(todoArr);
    });
  }, [user]);
  return (
    <div>
      TodoItem
      {todos &&
        todos.map((todo) => {
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </div>;
        })}
    </div>
  );
}

export default TodoItem;
