import React from "react";

// Import react icons
import { BsFillPlusSquareFill } from "react-icons/bs";

// Input component
const Input = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
  const handleInput = (e) => {
    // e.preventDefault();

    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);

    setInputText("");
  };

  const handleStatus = (e) => {
    setStatus(e.target.value)
   }

  return (
    <div className="flex mb-4">
      <form className="flex h-10 bg-sky-200 rounded-md "
        onSubmit={handleSubmit}>
        <input
          value={inputText}
          type="text"
          placeholder="Enter task . . ."
          className="text-lg bg-transparent text-gray-800 px-4 w-44 md:w-80 outline-none"
          onChange={handleInput}
        />
        <button className="text-3xl text-blue-600 px-1" type="submit">
          <BsFillPlusSquareFill />
        </button>
      </form>

      <div className="select ml-2 bg-sky-200 rounded-md">
        <select
          name="todos"
          id="filter-todos"
          className="bg-transparent w-32 p-2"
          onChange={handleStatus}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">UnCompleted</option>
        </select>
      </div>
    </div>
  );
};

export default Input;
