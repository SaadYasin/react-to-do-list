import React from 'react'
import Input from './Input'

const Header = () => {
  return (
    <div className="flex flex-col items-center md:flex-row  h-24 bg-sky-600 px-8">
      <h1 className="text-3xl font-bold text-white my-2">My To Do List</h1>
      <Input />
    </div>
  );
}

export default Header