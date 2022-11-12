import React from 'react';
import { BsCheckSquareFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
const Todo = () => {
  return (
    <div className=''>
      <li>Hello</li>

      <button>
        <BsCheckSquareFill />
      </button>
      <button><FaTrashAlt /></button>
    </div>
  );
}

export default Todo;
