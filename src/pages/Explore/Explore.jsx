import React from "react";
import { tshirt } from "../../assets";

const Explore = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="bg-[url(/explorebg.jpg)] w-[100%] h-[80%] mt-6">
        <div className="flex">
          <div className="ml-20 mt-10 w-1/2">
            <h1 className="mt-5 text-heading font-semibold min-[600px]:text-5xl max-[600px]:text-4xl min-[600px]:leading-normal max-[600px]:leading-tight max-[600px]:text-center ">
              <span className="font-semibold text-7xl ss:text-[72px] leading-[100px] text-transparent bg-clip-text text-[#D8BFD8] bg-gradient-to-r from-violet-600 to-pink-600">
                Explore Our
              </span>{" "}
              <br className="sm:block hidden" />
              <h1 className="font-semibold text-7xl ss:text-[72px] leading-[100px] ss:leading-[100.8px] text-indigo-500 mb-5 mt-5 ">
                High Quality
              </h1>
              <span className="font-semibold text-7xl ss:text-[72px] leading-[75px] text-transparent bg-clip-text text-[#D8BFD8] bg-gradient-to-r from-violet-600 to-pink-600">
                Collections
              </span>
            </h1>
            <button className="rounded-full border-2 w-48 p-3 bg-gradient-to-r from-pink-500 to-violet-500 mt-10">
              Explore {" > "}
            </button>
            <h1 className="mt-10 text-gray-400">Over 400+ members</h1>
          </div>
          <div className="w-1/2">
            <div className="">
              <img
                src={tshirt}
                alt=""
                className="w-[60%] h-[80%] mt-5 border-2 border-skyblue-300  p-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
