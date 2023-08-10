import React from "react";
import { explorecommunity, minus } from "../../assets";

const ExploreCommunity = () => {
  return (
    <div className="w-full h-[90vh] ">
      <div className="mb-5 lg:mb-20 mt-8">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl border p-3 rounded-lg text-[#9400D3] text-center mx-5 md:mx-auto lg:w-80">
          Community
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row md:gap-10 lg:gap-20">
        <div className="w-full md:w-1/2">
          <div className="flex text-xl md:text-2xl lg:text-3xl">
            <span className="text-pink-600 font-bold"> | </span>
            <h1 className="mr-3 ml-3 font-semibold text-white">Community</h1>
            <span className="text-white">of Over 1000 people</span>
          </div>
          <div className="description mt-5">
            <p className="leading-loose text-base md:text-lg lg:text-xl text-white">
              Join us and get involved in a number of ongoing events, <br /> and
              meetups. Not only run by the core team, <br /> but also organized by
              the community directly.
            </p>
          </div>
          <button className="border p-3 bg-pink-500 rounded-full w-[60%] md:w-[40%] lg:w-[30%] mt-10 font-normal hover:bg-violet-800 text-white">
            Join us{" "}
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img src={explorecommunity} alt="" className="border p-5 art" />
        </div>
      </div>
    </div>
  );
};

export default ExploreCommunity;
