import { useState, useEffect } from "react";
import userAuth from "../hooks/userAuth";
import { deleteTodo } from "../api/todo";
import { db } from "../firebase/index";
import { MdDeleteOutline } from "react-icons/md";

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
    <div className="ml-20">
      TodoItem
      {todos &&
        todos.map((todo) => {
          <div className="flex items-center bg-bg" key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <div>
              <button onClick={() => deleteTodo()}>
                <MdDeleteOutline />
              </button>
            </div>
          </div>;
        })}
    </div>
  );
}

export default TodoItem;
