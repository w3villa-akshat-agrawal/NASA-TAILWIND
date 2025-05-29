import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full  overflo return ( )w-hidden py-10 px-5">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        "bg-[url(/img/mountains.jpg)]
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div className="relative z-10  text-white ">
        <div className="md:py-12 grid  md:grid-cols-2  ">
          <div className="flex flex-col gap-5 md:mt-10 mb-2 md:mb-3">
            <span className=" lg:text-7xl md:text-5xl  font-bold text-3xl">
              For the Benefit of <br /> AII
            </span>
            <p className="text-[1rem]">
              NASA investigates the unknown in air and space, innovates for the
              benefit of <br /> humanity, and inspires the world through
              discoveries.
            </p>
            <button className="bg-red-500 py-2 rounded-sm px-5 text-[1.38rem] w-50 font-bold">
              NASA Missions
            </button>
          </div>
        </div>
        <div className="grid  md:grid-cols-4 grid-cols-1 gap-5 mt-4 md:mt-10 ">
          <div className="border-t pt-4 flex flex-col">
            <span>CREWED LUNAR FLYBY</span>
            <span className="text-xl flex flex-row">
              ArtemisII
              <span className="bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full ml-2">
                +
              </span>
            </span>{" "}
          </div>
          <div className="border-t pt-4 flex flex-col">
            <span>CREWED LUNAR FLYBY</span>
            <span className="text-xl flex flex-row">
              ArtemisII
              <span className="bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full ml-2">
                +
              </span>
            </span>{" "}
          </div>
          <div className="border-t pt-4 flex flex-col">
            <span>CREWED LUNAR FLYBY</span>
            <span className="text-xl flex flex-row">
              ArtemisII
              <span className="bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full ml-2">
                +
              </span>
            </span>{" "}
          </div>
          <div className="flex items-center justify-end">
            <div  className="md:flex flex-row items-center hidden ">
              {" "}
              <span className="bg-red-600 text-white w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-full ml-2 text-lg">
                +
              </span>
              <span className="w-[3.5rem] h-[3.5rem] rounded-full overflow-hidden inline-block ml-2">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
