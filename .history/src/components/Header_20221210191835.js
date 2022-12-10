import React from 'react'
import Image from 

const Header = () => {
  return (
    <div className='h-24 bg-sky-800/60 w-full'>
      <h1 className="text-2xl font-bold text-white text-center my-8">My Shopping List</h1>
      <Image src="/public/img/list-100.png" width={100} height={100} />
    </div>
  );
}

export default Header