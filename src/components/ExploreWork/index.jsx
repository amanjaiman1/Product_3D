import React from "react";
import { designingart, explorecommunity, ff3d } from "../../assets";

const ExploreWork = () => {
  return (
    <div className="w-full h-auto md:h-[100vh] px-5 md:px-10 lg:px-20">
      <div className="mb-5 md:mb-10 mt-10">
        <h1 className="font-semibold text-xl md:text-3xl lg:text-4xl border p-3 rounded-lg text-[#9400D3] text-center mx-5 md:mx-auto lg:w-80">
          Our Work
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        <div className="w-full md:w-1/2">
          <div className="flex justify-center md:justify-start ml-5 art border p-5">
            <img
              src={ff3d}
              alt=""
              className="w-[50%] h-[50%] md:w-[70%] md:h-[70%] lg:w-[90%] lg:h-[90%]"
            />
            <img
              src={designingart}
              alt=""
              className="w-[50%] h-[50%] md:w-[70%] md:h-[70%] lg:w-[90%] lg:h-[90%]"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex text-base md:text-lg lg:text-xl">
            <span className="text-pink-600 font-bold"> | </span>
            <h1 className="mr-3 ml-3 font-semibold text-pink-600">Showcase</h1>
            <span className="text-white"> of Customized T-Shirt Artistry</span>
          </div>
          <div className="description mt-5">
            <p className="leading-relaxed text-sm md:text-base lg:text-lg text-white">
              Experience the art of self-expression like never before. Our website
              empowers you to design, personalize, and order your own custom t-shirts
              effortlessly. Choose from a rich palette of colors, graphics, and fonts
              to bring your vision to life. We handle the printing and shipping,
              ensuring your unique creation is delivered straight to your door.
              Elevate your style and make a statement with personalized t-shirts
              tailored exclusively for you.
            </p>
          </div>
          <button className="border p-2 md:p-3 bg-pink-500 rounded-full w-[70%] md:w-[40%] lg:w-[30%] mt-5 md:mt-10 font-normal hover:bg-violet-800 text-white">
            Check out{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreWork;
