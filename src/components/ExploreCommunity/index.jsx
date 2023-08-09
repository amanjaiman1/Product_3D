import React from "react";
import { explorecommunity, minus } from "../../assets";

const ExploreCommunity = () => {
  return (
    <div className="w-full h-[90vh] ">
      <div className="mb-20">
        <h1 className="font-semibold text-4xl border p-3 rounded-lg text-[#9400D3] text-center w-50 ml-80 mr-80 ">
          Community
        </h1>
      </div>
      <div className="flex gap-20">
        <div className="w-1/2 ml-20">
          <img src={explorecommunity} alt="" className="border p-5 art" />
        </div>
        <div className="w-1/2">
          <div className="flex text-3xl">
            <span className="text-pink-600 font-bold"> | </span>
            <h1 className="mr-3 ml-3 font-semibold text-white">Community</h1>
            <span className="text-white">of Over 1000 people</span>
          </div>
          <div className="description mt-5">
            <p className="leading-loose text-lg text-white">
              Join us and involve in a number of ongoing events, <br /> and meetup.
              Not only run by the core team, <br /> but also run by the community
              directly.
            </p>
          </div>
          <button className="border p-3 bg-pink-500 rounded-full w-[30%] mt-10 font-normal hover:bg-violet-800 text-white">
            Join us{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreCommunity;
