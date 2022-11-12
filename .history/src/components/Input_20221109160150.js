import React from 'react'
import { BsFillPlusSquareFill } from "react-icons/bs";

const Input = () => {
  return (
    <div>
      <form className="flex h-10 bg-slate-600 radius">
        <input
          type="text"
          placeholder="Enter task . . ."
          className="text-xl bg-transparent text-white px-4 w-80 outline-none"
        />
        <button className="text-3xl text-blue-400 px-4" type="submit">
          <BsFillPlusSquareFill />
        </button>
      </form>
    </div>
  );
}

export default Input