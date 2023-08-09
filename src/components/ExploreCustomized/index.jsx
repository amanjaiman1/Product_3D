import React from "react";
import { art } from "../../assets";

const ExploreCustomized = () => {
  return (
    <div className="w-full h-[120vh] ">
      <div className="mb-10">
        <h1 className="font-semibold text-4xl border p-3 rounded-lg text-[#9400D3] text-center w-50 ml-80 mr-80">
          Our Design
        </h1>
      </div>
      <div className="flex mt-20">
        <div className="w-1/2 ml-20 flex flex-col">
          <div className="flex text-3xl">
            <span className="text-pink-600 font-bold text-white"> | </span>
            <h1 className="mr-3 ml-3 font-semibold text-white">Why</h1>
            <span className="text-white">
              People <span className="text-pink-600">loves</span> Customized T-Shirts
            </span>
          </div>
          <div className="description mt-5">
            <p className="leading-loose text-lg text-white">
              Customized t-shirts are adored for transforming clothing into a
              personal canvas. <br />
              Embracing individuality, they merge art, style, and sentiment, <br />
              allowing wearers to flaunt passions and stand out effortlessly.
            </p>
          </div>
          <button className="border p-3 bg-pink-500 rounded-full w-[30%] mt-10 font-normal hover:bg-violet-800 text-white">
            Explore more{" "}
          </button>
          <div className="mt-10">
            <h1 className="text-3xl text-white">
              Excited to <span className="text-pink-600">design</span> your
              customized tshirts
            </h1>
            <p className="text-lg mt-5 leading-loose text-white">
              Embark on a creative journey at our website, where the world of
              customized t-shirts unfolds before you. Unleash your imagination and
              design prowess to curate a unique fashion statement that truly embodies
              you.
            </p>
          </div>
          <button className="border p-3 bg-pink-500 rounded-full w-[30%] mt-10 font-normal hover:bg-violet-800 text-white">
            Design now
          </button>
        </div>
        <div className="w-1/2">
          <img src={art} alt="" className="ml-20 w-[70%] h-[80%] border p-5 art" />
        </div>
      </div>
    </div>
  );
};

export default ExploreCustomized;
