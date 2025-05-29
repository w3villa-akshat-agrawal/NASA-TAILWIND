import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full mx-auto bg-black grid grid-cols-12 items-center py-4 px-5 text-white">
      
      {/* Left Section */}
      <div className="col-span-5">
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="font-[400] text-xl">Explore</span>
            <span className="border rounded-full h-[17px] w-[17px] flex items-center justify-center">
              <i className="ri-arrow-drop-down-line"></i>
            </span>
          </div>
          <input
            className="border border-gray-500 ps-2 bg-black text-white"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className='lg:hidden flex jus'>
                    <span className='text-2xl'><i class="ri-search-line "></i></span>
            </div>
      </div>

      {/* Logo */}
      <div className="col-span-2 flex justify-center items-center h-[50.58px]">
        <img className="h-full object-contain" src="logo.svg" alt="Logo" />
      </div>

      {/* Right Section */}
      <div className="col-span-5">
        <div className="hidden lg:block">
          <ul className="flex flex-row gap-2 justify-end space-x-4">
            <li className="text-xl">News and Events</li>
            <li className="text-xl">Multimedia</li>
            <li className="flex space-x-1">
              <span className="text-xl">NASA+</span>
              <span className="border   hover:bg-red-500 border-red-600">
                <div> LIVE</div>
              </span>
            </li>
          </ul>
        </div>
        <div className='lg:hidden flex justify-end'>
                    <span className='text-2xl'><i class="ri-menu-line "></i></span>
            </div>
      </div>
    </div>
  );
};

export default Navbar;
