import React from 'react';
import Todo from './styles/'

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
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed,
        };
      }
      return item;
    }))
  };


  return (
    <div className="flex justify-between items-center mb-2 w-80 h-8 bg-white">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>

      <div className="flex">
        <button className="text-white bg-green-600 text-3xl"
        onClick={handleCompleted}
        >
          
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
