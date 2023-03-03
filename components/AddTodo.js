import { useState } from "react";
import userAuth from "../hooks/userAuth";
import { addTodo } from "../api/todo";
import { GrAdd } from "react-icons/gr";

import Modal from "react-modal";

function AddTodo() {
  const { user, isLoggedIn } = userAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    <div className="grid place-items-center mt-10 m-5 ">
      <div className="flex items-center h-20">
        <h2 className="mr-5">Add Todos</h2>
        <button onClick={() => setModalIsOpen(true)}>
          <GrAdd />
        </button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <div className="flex flex-col justify-between bg-white">
            <input
              className="p-3"
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="mt-4"
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="mt-4 " onClick={() => handleCreateTodo()}>
              Add todo
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default AddTodo;
