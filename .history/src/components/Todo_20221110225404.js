import React from 'react';
import { BsCheckSquareFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
const Todo = () => {
  return (
    <div className="flex justify-between items-center mt-8 w-52 h-10 bg-white">
      <li>Hello</li>

      <div className="">
      <button>
        <BsCheckSquareFill />
      </button>
      <button><FaTrashAlt /></button>
      </div>
    </div>
  );
}

export default Todo;
