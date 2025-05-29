import React from 'react'

const Explore = () => {
  return (
    <div className= "px-5 py-10 w-full bg-[url('/explore.webp')] bg-center bg-no-repeat bg-cover text-white mt-20">
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div className='md:px-25 sm:px-10 px-1 py-20 flex flex-col gap-5 '>
                        <span className='md:text-6xl sm:text-4xl text-3xl font-bold'>Explore the <br /> universe from <br /> your  inbox</span>
                        <p className='text-sm font-extrabold'>Stay up-to-date on the latest news from NASA–from Earth to the Moon, the Solar System and beyond.</p>
                        <span>We will never share your email address <span className='border-b-1 border-dotted'>Privacy Policy</span> </span>
                        <span className='text-2xl font-bold'>Sign Up</span>
                    </div>
                    <div>

                    </div>
            </div>
    
    </div>
  )
}

export default Explore