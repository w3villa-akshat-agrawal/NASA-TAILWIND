import React from "react";

const News = () => {
  return (
    <div className="sm:px-1 px-4">
      <div className="md:flex lg:flex-row flex-col lg:justify-between justify-center items-center text-center lg:py-20 py-10">
        <span className="lg:text-5xl text-3xl font-bold">Featured News</span>
        <span className="flex flex-row gap-2 items-center  lg:justify-between justify-center">
          <span className="lg:text-2xl text-1xl font-bold">Recently Published</span>
          <span className="bg-red-600 w-[30px] h-[30px] flex items-center justify-center rounded-full text-white">
            +
          </span>
        </span>
      </div>

      <div className="grid grid-cols-12 gap-4  mb-4">
        <div className="lg:col-span-6 h-[350px] col-span-12 flex flex-col justify-between py-3 px-3 text-white bg-[url('/news1.jpg')] bg-center bg-no-repeat bg-cover ">
          <span>
            <i className="ri-news-line"></i> Blog
          </span>
          <div className="flex flex-col">
            <span>1 min read</span>
            <span className="text-xl font-bold">Sun Releases Strong Flare</span>
          </div>
        </div>

        <div className="lg:col-span-3 sm:col-span-6 col-span-12  h-[350px] flex flex-col justify-between py-3 px-3 text-white bg-[url('/new2.jpg')] bg-center bg-no-repeat bg-cover ">
          <span>
            <i className="ri-news-line"></i> Blog
          </span>
          <div className="flex flex-col">
            <span>3 min read</span>
            <span className="text-xl font-bold">
              SpaceX Dragon Splashes Down off the Coast of California
            </span>
          </div>
        </div>

        <div className="lg:col-span-3 sm:col-span-6 col-span-12 grid grid-rows-2 gap-4 h-[350px]">
          <div className="flex flex-col justify-between py-3 px-3 text-white bg-[url('/new3.jpg')] bg-center bg-no-repeat bg-cover h-full">
            <span>
              <i className="ri-news-line"></i> Blog
            </span>
            <div className="flex flex-col">
              <span>2 min read</span>
              <span className="text-xl font-bold">
                NASA Videographer Wins Top Award for Capturing Human Side of
                Science
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between py-3 px-3 text-white bg-[url('/news4.jpg')] bg-center bg-no-repeat bg-cover h-full">
            <span>
              <i className="ri-news-line"></i> Blog
            </span>
            <div className="flex flex-col">
              <span>2 min read</span>
              <span className="text-xl font-bold">
                Hubble Spies a Spiral So Inclined
              </span>
            </div>
          </div>
        </div>
      </div>

    
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4">
      
        <div className="flex items-center  lg:mb-10 mb-5 p-4">
          <div className="w-[5rem] h-[5rem] flex-shrink-0">
            <img
              src="new5.jpg"
              alt="News"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col ml-4 text-black">
            <span className="text-sm">5 min read</span>
            <span className="font-semibold text-sm">
              Percolating Clues: NASA Models New Way to Build Planetary Cores
            </span>
            <span className="text-xs italic">Article</span>
          </div>
        </div>

     
        <div className="flex items-center lg:mb-10 mb-5  p-4">
          <div className="w-[5rem] h-[5rem] flex-shrink-0">
            <img
              src="new8.jpg"
              alt="News"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col ml-4 text-black">
            <span className="text-sm">5 min read</span>
            <span className="font-semibold text-sm">
              NASA’s Dragonfly Mission Sets Sights on Titan’s Mysteries
            </span>
            <span className="text-xs italic">Article</span>
          </div>
        </div>

        <div className="flex items-center  lg:mb-10 mb-5 p-4">
          <div className="w-[5rem] h-[5rem] flex-shrink-0">
            <img
              src="news7.webp"
              alt="News"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col ml-4 text-black">
            <span className="text-sm">5 min read</span>
            <span className="font-semibold text-sm">
              Another Milestone for X-59
            </span>
            <span className="text-xs italic">Article</span>
          </div>
        </div>

        <div className="flex items-center  lg:mb-10 mb-5 p-4">
          <div className="w-[5rem] h-[5rem] flex-shrink-0">
            <img
              src="news4.jpg"
              alt="News"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col ml-4 text-black">
            <span className="text-sm">5 min read</span>
            <span className="font-semibold text-sm">
              What’s Up: May 2025 <br /> Skywatching Tips from NASA
            </span>
            <span className="text-xs italic">Article</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
