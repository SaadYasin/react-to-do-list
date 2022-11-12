import React from 'react'
import { FiPlusSquare } from "react-icons/fi";

const Input = () => {
  return (
    <div>
      <form className="flex h-10 bg-gray-300">
        <input type="text" placeholder='Enter task . . .' className="bg-transparent px-4 w-80"/>
        <button className="text-3xl text-blue" type='submit'><FiPlusSquare /></button>
      </form>
    </div>
  )
}

export default Input