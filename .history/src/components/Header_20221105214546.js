import React from 'react'
import 

const Header = () => {
  return (
    <div className="flex items-center h-16 bg-sky-600 px-12">
      <h1 className="text-3xl font-bold text-white">My To Do List</h1>
      <Input />
    </div>
  )
}

export default Header