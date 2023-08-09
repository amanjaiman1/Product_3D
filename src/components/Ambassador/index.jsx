import React from "react";
import { ambassador } from "../../assets";

const Ambassador = () => {
  return (
    <div className="flex h-[50vh] ml-20 mr-20 p-5 rounded-lg">
      <div className="w-1/2 h-full p-5">
        <div className="flex text-3xl">
          <span className="text-pink-600 font-bold"> | </span>
          <h1 className="mr-3 ml-3 font-semibold text-white">Ambassador</h1>
          <span className="text-white">Program</span>
        </div>
        <div className="description mt-5">
          <p className="leading-relaxed text-[#D8BFD8]">
            Support the Fashion Froze core team through community and <br />
            marketing initiatives while accumulating rewards
          </p>
        </div>
        <button className="border p-3 bg-pink-500 rounded-full w-[25%] mt-10 font-normal hover:bg-violet-800 text-[#D8BFD8]">
          Learn more {"  "}
        </button>
      </div>
      <div className="w-1/2 h-full ml-20 ">
        <img src={ambassador} alt="" className="w-[80%] h-[100%]" />
      </div>
    </div>
  );
};

export default Ambassador;
