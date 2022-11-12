import React from 'react';
import { BsCheck } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
const Todo = () => {
  return (
    <div className="flex justify-between items-center  w-80 h-8 bg-white">
      <li className='px-2'>Hello</li>

      <div className="flex">
        <button className="text-white bg-green-600 text-3xl">
          <BsCheck />
        </button>
        <button className="text-lg bg-red-500 text-white p-1">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default Todo;
