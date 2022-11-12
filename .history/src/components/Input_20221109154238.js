import React from 'react'
import { FiPlusSquare } from "react-icons/fi";

const Input = () => {
  return (
    <div>
      <form className="flex h-10 ">
        <input type="text" placeholder='Enter task . . .' className='px-4 w-80'/>
        <button className="text-3xl bg-blue-700 text" type='submit'><FiPlusSquare /></button>
      </form>
    </div>
  )
}

export default Input