import React from "react";
import { v4 as uuidv4 } from "uuid";

// Import react icons
import { BsFillPlusSquareFill } from "react-icons/bs";

const Input = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
  const handleInput = (e) => {

    setInputText(e.target.value);

    if (inputText === "") {
      alert("Please enter a value");
    } 
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();

    setTodos([...todos, { text: inputText, completed: false, id: uuidv4() }]);

    setInputText(" ");
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  }

  return (
    <div className="flex flex-col items-center mb-4">
      <form
        className="flex h-10 bg-sky-200 rounded-md mt-4"
        onSubmit={handleSubmit}
      >
        <input
          value={inputText}
          type="text"
          placeholder="Add  . . ."
          className="text-lg bg-transparent text-gray-800 px-4 w-72 md:w-80 outline-none"
          onChange={handleInput}
          required
        />
        <button className="text-3xl text-orange-500 px-1" type="submit">
          <BsFillPlusSquareFill />
        </button>
      </form>

      <div className="select ml-2 bg-sky-200 rounded-md mt-4">
        <select
          name="todos"
          id="filter-todos"
          className="bg-transparent w-44 p-2 "
          onChange={handleStatus}
        >
          <option value="all">Filter All</option>
          <option value="completed">Filter Completed</option>
          <option value="uncompleted">Filter UnCompleted</option>
        </select>
      </div>
    </div>
  );
};

export default Input;
