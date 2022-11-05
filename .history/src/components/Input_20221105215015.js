import React from 'react'

const Input = () => {
  return (
    <div>
      <form className="flex justify-between h-10 w-10">
        <input type="text" placeholder='Enter task . . .' />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Input