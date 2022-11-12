import React from 'react'
import Input from './Input'

const Header = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between h-24 px-8">
      <h1 className="text-2xl font-bold text-white my-2">My To Do List</h1>
      <Input />
    </div>
  );
}

export default Header