import React from 'react';

// Import react icons
import { BsCheck } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
// Todo Component
const Todo = ({ text, setTodos, todos, todo }) => {
  
  // HandleDelete function
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  // Complete handler function
  const handleCompleted = () => { 
    setTodos(todos.map(ite))
  }


  return (
    <div className="flex justify-between items-center mb-2 w-80 h-8 bg-white">
      <li className='px-2'>{text}</li>

      <div className="flex">
        <button className="text-white bg-green-600 text-3xl">
          
          {/* Check icon */}
          <BsCheck />
        </button>
        <button className="text-lg bg-red-500 text-white p-1"
          onClick={handleDelete}>
          
          {/* Trash can icon */}
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default Todo;
