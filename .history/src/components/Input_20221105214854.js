import React from 'react'

const Input = () => {
  return (
    <div>
      <form className="flex ">
        <input type="text" placeholder='Enter task . . .' />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Input