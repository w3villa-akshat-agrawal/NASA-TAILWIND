import React from 'react'

const InformationCenter = () => {
  return (
    <div className='max-w-[85rem] mx-auto  sm:px-0 px-5 py-20'>
        <div className='grid lg:grid-cols-2 grid-cols-1 md:gap-30 gap-15'>
            <div className='flex flex-col gap-10'>
                <span className='text-xl font-bold'>Earth Information Center</span>
                <h1 className='md:text-5xl text-3xl font-bold'>Explore our changing planet</h1>
                <div className='flex flex-col gap-2'>
                     <p>For more than 50 years, NASA satellites have provided data on Earth’s land, water, air, temperature, and climate. NASA’s Earth Information Center allows visitors to see how our planet is changing in six key areas: sea level rise and coastal impacts, health and air quality, wildfires, greenhouse gases, sustainable energy, and agriculture.
                </p>
                <span className='text-xl font-bold'>Earth Science</span>
                </div>
            </div>
            
            <div>
                  <div className=' lg:h-[300px] h-auto '>
                      <img className='h-full w-full' src="map.jpg" alt="" />
                  </div>
                  <p className=' mt-3 text-xs'>The St. Clair River flows into the freshwater Lake St. Clair and separates the American state of Michigan (top) from the Canadian province of Ontario (bottom) in this photograph from the International Space Station as it orbited 260 miles above.</p>
                  <span className='text-[12px] '>NASA</span>
            </div>
        </div>
    </div>
  )
}

export default InformationCenter