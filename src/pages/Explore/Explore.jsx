import React from "react";
import { tshirt } from "../../assets";

const Explore = () => {
  return (
    <div className="w-full h-auto md:h-[100vh]">
      <div className="bg-[url(/explorebg.jpg)] w-full h-[80%] md:mt-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:ml-20 md:mt-10 md:w-1/2">
            <h1 className="mt-5 text-heading font-semibold text-4xl md:text-5xl max-w-[80%] md:max-w-[none] leading-[1.2] text-center md:text-left">
              <span className="font-semibold text-5xl md:text-7xl leading-[1.2] text-transparent bg-clip-text text-[#D8BFD8] bg-gradient-to-r from-violet-600 to-pink-600">
                Explore Our
              </span>{" "}
              <br className="sm:block hidden" />
              <span className="font-semibold text-4xl md:text-5xl md:leading-[1.1] text-indigo-500 mb-2 md:mb-5">
                High Quality
              </span>
              <span className="hidden md:inline font-semibold text-5xl md:text-7xl leading-[1.2] text-transparent bg-clip-text text-[#D8BFD8] bg-gradient-to-r from-violet-600 to-pink-600">
                Collections
              </span>
              <span className="md:hidden font-semibold text-4xl md:text-5xl leading-[1.1] text-transparent bg-clip-text text-[#D8BFD8] bg-gradient-to-r from-violet-600 to-pink-600">
                Coll...
              </span>
            </h1>
            <button className="rounded-full border-2 w-48 p-3 bg-gradient-to-r from-pink-500 to-violet-500 mt-4 md:mt-6">
              Explore {" > "}
            </button>
            <p className="mt-4 md:mt-6 text-gray-400">Over 400+ members</p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex justify-center">
              <img
                src={tshirt}
                alt=""
                className="w-[60%] md:w-[80%] h-auto mt-5 border-2 border-skyblue-300 p-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
