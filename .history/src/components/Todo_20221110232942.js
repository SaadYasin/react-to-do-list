import React from 'react';
import { BsCheck } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
const Todo = () => {
  return (
    <div className="flex justify-between items-center mt-8 w-80 h-8 bg-white">
      <li>Hello</li>

      <div className="flex">
        <button className="text-white bg-green-600 text-2xl">
          <FiCheck />
        </button>
        <button className="text-lg bg-red-500 text-white p-1">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default Todo;
