import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

const Input = () => {
  return (
    <div >
      <form className="flex h-10 bg-sky-200 rounded-md">
        <input
          type="text"
          placeholder="Enter task . . ."
          className="text-xl bg-transparent text-white px-4 w-44 outline-none"
        />
        <button className="text-3xl text-blue-600 px-2" type="submit">
          <BsFillPlusSquareFill />
        </button>
      </form>

      <div className="select ml-2">
        <select name="todos" id="filter-todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">UnCompleted</option>
        </select>
      </div>

    </div>
  );
};

export default Input;
