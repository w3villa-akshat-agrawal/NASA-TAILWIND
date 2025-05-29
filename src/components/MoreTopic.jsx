import React from 'react'

const MoreTopic = () => {
  return (
    <div className='container m-auto flex flex-col  gap-10 sm-px-0 px-5'>
        <span className='sm:text-5xl text-3xl  font-bold lg:text-start text-center'>More Topics from NASA</span>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-x-4 gap-y-8 '>
              <div className="w-full h-[480px] bg-[url('/mt1.webp')] bg-cover  bg-center px-3 flex items-end text-white py-4">
                    <span className="text-2xl font-bold">Earth's Moon </span>
            </div>
             <div className="w-full h-[480px] bg-[url('/mt-2.webp')] bg-cover bg-center px-3 flex items-end text-white py-4">
                    <span className="text-2xl font-bold">Earth's Moon </span>
            </div>
             <div className="w-full h-[480px] bg-[url('/mt3.jpg')] bg-cover bg-center px-3 flex items-end text-white py-4">
                    <span className="text-2xl font-bold">Earth's Moon </span>
            </div>
             <div className="w-full h-[480px] bg-[url('/mt4.webp')] bg-cover bg-center px-3 flex items-end text-white py-4">
                    <span className="text-2xl font-bold">Earth's Moon </span>
            </div>
             <div className="w-full h-[480px] bg-[url('/mt-5.webp')] bg-cover bg-center px-3 flex items-end text-white py-4">
                    <span className="text-2xl font-bold">Earth's Moon </span>
            </div>
             <div className="w-full h-[480px] bg-[url('/mt-6.webp')] bg-cover bg-center px-3 flex items-end text-white py-4">
                    <span className="text-2xl font-bold">Earth's Moon </span>
            </div>
             <div className="w-full h-[480px] bg-[url('/mt-7.webp')] bg-cover bg-center px-3 flex items-end text-white py-4">
                    <span className="text-2xl font-bold">Earth's Moon </span>
            </div>
             <div className="w-full h-[480px] bg-[url('/mt-8.webp')] bg-cover bg-center px-3 flex items-end text-white py-4">
                    <span className="text-2xl font-bold">Earth's Moon </span>
            </div>

        </div>
    </div>
  )
}

export default MoreTopic