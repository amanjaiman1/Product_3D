import React from "react";
import { art } from "../../assets";

const ExploreCustomized = () => {
  return (
    <div className="w-full h-[120vh] px-5 md:px-10 lg:px-20">
      <div className="mb-5 md:mb-10 mx-5 md:mx-0 mt-10">
        <h1 className="font-semibold text-xl md:text-3xl lg:text-4xl border p-3 rounded-lg text-[#9400D3] text-center">
          Our Design
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row mt-10 md:mt-20">
        <div className="w-full md:w-1/2">
          <img src={art} alt="" className="w-full h-auto border p-5 art" />
        </div>
        <div className="w-full md:w-1/2 md:ml-10 flex flex-col">
          <div className="flex text-xl md:text-2xl lg:text-3xl">
            <span className="text-pink-600 font-bold text-white"> | </span>
            <h1 className="mr-3 ml-3 font-semibold text-white">Why</h1>
            <span className="text-white">
              People <span className="text-pink-600">love</span> Customized T-Shirts
            </span>
          </div>
          <div className="description mt-5">
            <p className="leading-loose text-base md:text-lg lg:text-xl text-white">
              Customized t-shirts are adored for transforming clothing into a
              personal canvas. <br />
              Embracing individuality, they merge art, style, and sentiment, <br />
              allowing wearers to flaunt passions and stand out effortlessly.
            </p>
          </div>
          <button className="border p-3 bg-pink-500 rounded-full w-[70%] md:w-[40%] lg:w-[30%] mt-10 font-normal hover:bg-violet-800 text-white">
            Explore more{" "}
          </button>
          <div className="mt-10">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-white">
              Excited to <span className="text-pink-600">design</span> your
              customized t-shirts
            </h1>
            <p className="text-base md:text-lg lg:text-xl mt-5 leading-loose text-white">
              Embark on a creative journey at our website, where the world of
              customized t-shirts unfolds before you. Unleash your imagination and
              design prowess to curate a unique fashion statement that truly embodies
              you.
            </p>
          </div>
          <button className="border p-3 bg-pink-500 rounded-full w-[70%] md:w-[40%] lg:w-[30%] mt-10 font-normal hover:bg-violet-800 text-white mb-10">
            Design now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreCustomized;
