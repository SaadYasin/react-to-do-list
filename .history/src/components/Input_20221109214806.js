import React, { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

const Input = () => {
  const [task, setTask] = useState(null);

  const handleInput = (e) => {
  e.preventDefault()
  };
  return (
    <div className="flex">
      <form className="flex h-10 bg-sky-200 rounded-md">
        <input
          type="text"
          placeholder="Enter task . . ."
          className="text-xl bg-transparent text-white px-4 w-44 md:w-80 outline-none"
        />
        <button className="text-3xl text-blue-600 px-1" type="submit">
          <BsFillPlusSquareFill />
        </button>
      </form>

      <div className="select ml-2 bg-sky-200 rounded-md">
        <select name="todos" id="filter-todos" className="bg-transparent p-2">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">UnCompleted</option>
        </select>
      </div>

    </div>
  );
};

export default Input;
