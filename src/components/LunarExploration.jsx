import React from 'react'

const LunarExploration = () => {
  return (
    <div className="max-w-[85rem] mx-auto sm:px-0 px-5 ">
        <div className='flex md:flex-row flex-col justify-center  md:justify-between items-center py-10 my-5'>
            <span className='sm:text-4xl text-3xl font-bold'>Lunar Exploration</span>
            <span className='text-2xl font-bold'>Discover More</span>
        </div>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3'>
            <div className="w-full h-[480px] bg-[url('/e1.webp')] bg-cover bg-center px-3 flex items-end text-white py-4">
                    <span className="text-2xl font-bold">Earth's Moon </span>
            </div>
               <div className="w-full h-[480px] bg-[url('/ldep-1.webp')] bg-cover bg-center px-3 flex items-end text-white py-4">
                    <span className="text-2xl font-bold">Earth's Moon </span>
            </div>
               <div className="w-full h-[480px] bg-[url('/e4.png')] bg-cover bg-center px-3 flex items-end text-white py-4">
                    <span className="text-2xl font-bold">Earth's Moon </span>
            </div>
               <div className="w-full h-[480px] bg-[url('/e2.jpg')] bg-cover bg-center px-3 flex items-end text-white py-4">
                    <span className="text-2xl font-bold">Earth's Moon </span>
            </div>

        </div>
           
    </div>
  )
}

export default LunarExploration