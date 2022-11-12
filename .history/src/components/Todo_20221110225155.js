import React from 'react';
import { BsCheckSquareFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
const Todo = () => {
  return (
    <div className="flex mt-8 w-52 bg-white">
      <li>Hello</li>

      <div className="buttons">
        
      </div>
      <button>
        <BsCheckSquareFill />
      </button>
      <button><FaTrashAlt /></button>
    </div>
  );
}

export default Todo;
