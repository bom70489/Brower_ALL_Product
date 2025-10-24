import React from 'react'

interface NavberProps {
    setToken : (tokne : string) => void;
}

const Navber: React.FC<NavberProps> = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <img src='/Frame_1__1_-removebg-preview.png' className='max-w-[100px]' />
        <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navber
