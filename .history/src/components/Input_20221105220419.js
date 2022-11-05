import React from 'react'

const Input = () => {
  return (
    <div>
      <form className="flex h-10 ">
        <input type="text" placeholder='Enter task . . .' cla/>
        <button className="bg-blue-800 w-20" type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Input