import { useState } from "react";
import userAuth from "../hooks/userAuth";
import { addTodo } from "../api/todo";

function AddTodo() {
  const { user, isLoggedIn } = userAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateTodo = async () => {
    if (!isLoggedIn) {
      alert("please login");
      return;
    }
    const todo = {
      title,
      description,
      userId: user.uid,
    };
    await addTodo(todo);

    setTitle("");
    setDescription("");
    console.log("item added successfully");
  };

  return (
    <div className="grid place-items-center">
      <div className="flex flex-col mt-10">
        <input
          className="border-black"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-indigo-900 text-white p-2"
          onClick={() => handleCreateTodo()}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
