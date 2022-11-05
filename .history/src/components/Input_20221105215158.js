import React from 'react'

const Input = () => {
  return (
    <div>
      <form className="flex h-10">
        <input type="text" placeholder='Enter task . . .' />
        <button className="w-16" type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Input