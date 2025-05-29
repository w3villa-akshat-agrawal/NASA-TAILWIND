import React from "react";

const Footer = () => {
  return (
    <div className="w-full px-5 bg-black text-white mt-20">
      <div className="py-10">
        <div className="col-span-2  h-[50.58px] ">
        <img className="h-full object-contain" src="logo.svg" alt="Logo" />
      </div>
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="lg:col-span-4 sm:col-span-6 col-span-12 flex flex-col gap-3 px-3 ">
          <span className="text-2xl font-bold">
            National Aeronautics and Space Administration
          </span>
          <p className="text-gray-500">
            NASA explores the unknown in air and space, innovates for the
            benefit of humanity, and inspires the world through discovery.
          </p>
          <span className="font-bold">About NASA'S Mission</span>
          <span>Join us</span>
        </div>
        <div className="lg:col-span-6 sm:col-span-6 col-span-12 px-4">
          <div className="grid grid-cols-3">
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  className="inline-block border-b-2 border-transparent hover:border-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block border-b-2 border-transparent hover:border-black"
                >
                  News & Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block border-b-2 border-transparent hover:border-black"
                >
                  Multimedia
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block border-b-2 border-transparent hover:border-black"
                >
                  NASA +
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block border-b-2 border-transparent hover:border-black"
                >
                  Mission
                </a>
              </li>
            </ul>

            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  className="inline-block border-b border-transparent hover:border-white hover:border-dotted"
                >
                  Humans in space
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block border-b border-transparent hover:border-white hover:border-dotted"
                >
                  Earth
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block border-b border-transparent hover:border-white hover:border-dotted"
                >
                  The solar system
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block border-b border-transparent hover:border-white hover:border-dotted"
                >
                  The universe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block border-b border-transparent hover:border-white hover:border-dotted"
                >
                  Science
                </a>
              </li>
            </ul>

            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  className="inline-block border-b border-transparent hover:border-white hover:border-dotted"
                >
                  Aeronautics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block border-b border-transparent hover:border-white hover:border-dotted"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block border-b border-transparent hover:border-white hover:border-dotted"
                >
                  Learning Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block border-b border-transparent hover:border-white hover:border-dotted"
                >
                  About NASA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block border-b border-transparent hover:border-white hover:border-dotted"
                >
                  NASA en español
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-2 sm:col-span-2 col-span-12 pt-4">
            <div className="flex flex-col">
                <div className="flex flex-col gap-3">
                    <span>Follow NASA</span>
            <span>More NASA Social Accounts</span>
            <span>NASA Newsletters</span>
                </div>
            </div>
        </div>
        <div className="cl-span-12"></div>
      </div>
    </div>
  );
};

export default Footer;
