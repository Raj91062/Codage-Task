import React, { useState } from "react";

const Task = () => {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  const [description, setDescription] = useState([]);
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (value.trim() === "") return;

    if (editIndex !== null) {
      const updatedTodos = todos.map((item, index) =>
        index === editIndex ? value : item,
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, value]);
      setDescription([...description, value1]);
    }

    setValue("");
    setValue1("");
  };

  const deleteTodo = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setValue(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="bg-black/50 h-screen w-screen flex justify-center items-center md:flex-col">
      <div className="border-2 h-auto w-auto text-center p-5 bg-white rounded-xl space-x-3">
        <h1 className="mt-5 font-bold text-xl">Todo List</h1>

        <input
          type="text"
          value={value}
          placeholder="Enter Your todo"
          className="border-2 mt-5 p-2  md:w-100 font-semibold outline-0 rounded-2xl"
          onChange={(e) => setValue(e.target.value)}
        />

        <div>
          <textarea
            type="text"
            value={value1}
            placeholder="Enter Description"
            className="border-2 mt-5 ml-2 w-53 md:w-100 p-2 h-auto w- font-semibold outline-0 rounded-2xl"
            onChange={(e) => setValue1(e.target.value1)}
          />
        </div>

        <button
          onClick={addTodo}
          className="border-2 mt-5 cursor-pointer hover:bg-gray-200 p-2 font-semibold outline-0 rounded-2xl"
        >
          {editIndex !== null ? "Update Todo" : "Add Todo"}
        </button>

        <div className="mt-5">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex justify-between items-center border p-2 mt-2 rounded-lg"
            >
              <p>{todo}</p>

              <div className="flex gap-2">
                <button
                  onClick={() => editTodo(index)}
                  className="bg-yellow-400 px-3 py-1 rounded-lg"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTodo(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
