import React from 'react'

const Youtube = () => {
  return (
    <div className='w-full px-5 m-auto bg-black text-white py-10'>
        <div className="grid grid-cols-12">
            <div className="lg:col-span-5 col-span-12 flex justify-center items-center">
                <div  className='flex flex-col px-5 gap-4'>
                    <span> Featured vedio</span>
                    <span  className='font-bold md:text-[2.25rem] text-2xl'>Simulating Lunar <br /> Exploration </span>
                    <p className='text=[.875rem] text-gray-500'>Go behind the scenes of a week-long field test for humanity’s return to the lunar surface, where two integrated teams of astronauts, engineers, and field experts work together to practice end-to-end lunar operations.</p>
                    <span className='text-[1rem] font-bold'>Extravehicular Activity and Human Surface Mobility</span>
                </div>
            </div>
  <div className="lg:col-span-7 col-span-12  w-full" style={{ aspectRatio: '16 / 9' }}>
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/x2HIeXJv_wQ"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

        </div>
    </div>
  )
}

export default Youtube