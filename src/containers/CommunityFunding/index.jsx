import React from "react";
import { designingart, ff3d } from "../../assets";

const CommunityFunding = () => {
  return (
    <div className="w-full h-[100vh] mt-20">
      <div className="mb-20">
        <h1 className="font-semibold text-4xl border p-3 rounded-lg text-[#9400D3] text-center w-50 ml-80 mr-80">
          Funding
        </h1>
      </div>
      <div className="flex gap-20">
        <div className="w-1/2 ">
          <div className="flex ml-10 art border p-5">
            <img src={ff3d} alt="" className="w-[50%] h-[50%]" />
            <img src={designingart} alt="" className="w-[50%] h-[50%]" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex text-3xl">
            <span className="text-pink-600 font-bold"> | </span>
            <h1 className="mr-3 ml-3 font-semibold text-pink-600">EcoSystem</h1>
            <span className="text-white"> Funding program</span>
          </div>
          <div className="description mt-5">
            <p className="leading-loose text-lg text-white">
              Learn how the Ecosystem Funding program initiative supports projects{" "}
              <br />
              that contribute to growth and adoption of Fashion Froze 3D
            </p>
          </div>
          <button className="border p-3 bg-pink-500 rounded-full w-[30%] mt-10 font-normal hover:bg-violet-800 text-white">
            Apply to FF3D{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityFunding;
