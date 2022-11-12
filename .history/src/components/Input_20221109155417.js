import React from 'react'
import { BsFillPlusSquareFill } from "react-icons/bs";

const Input = () => {
  return (
    <div>
      <form className="flex h-10 bg-slate-300">
        <input
          type="text"
          placeholder="Enter task . . ."
          className="bg-transparent text-gray px-4 w-80"
        />
        <button className="text-3xl text-blue-600" type="submit">
          <BsFillPlusSquareFill />
        </button>
      </form>
    </div>
  );
}

export default Input