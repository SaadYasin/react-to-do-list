import React from 'react';
import { RiCheckboxFill } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
const Todo = () => {
  return (
    <div className="flex justify-between items-center mt-8 w-80 h-8 bg-white">
      <li>Hello</li>

      <div className="flex">
        <button className="text-green-600 text-3xl">
          <RiCheckboxFill />
        </button>
        <button className="text-xl bg-red-500 text-white rounded p-1">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default Todo;
