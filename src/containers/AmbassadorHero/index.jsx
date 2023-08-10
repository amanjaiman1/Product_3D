import React from "react";
import { ambassador } from "../../assets";

const AmbassadorHero = () => {
  return (
    <div className="w-full h-[120vh]">
      <div class="title-wrapper text-center">
        <h1 class="sweet-title mb-8">
          <span data-text="WELCOME TO" className=" max-sm:text-[70px]">
            WELCOME TO
          </span>
          <h1 className="text-white text-8xl leading-tight font-semibold animate-[lights_5s_750ms_linear_infinite] mt-10">
            Our{" "}
          </h1>
          <h1 className="text-white text-8xl leading-tight font-semibold animate-[lights_5s_750ms_linear_infinite]">
            Ambassador Program
          </h1>
        </h1>
      </div>
      <div className="ml-20 mr-20 flex mt-10">
        <div className="w-1/2">
          <div className="flex text-3xl mb-10">
            <span className="text-pink-600 font-bold"> | </span>
            <h1 className="mr-3 ml-3 font-semibold text-white">Ambassador</h1>
            <span className="text-white">Program</span>
          </div>
          <p className="text-white leading-relaxed text-lg">
            This is an opportunity for our most enthusiastic, empathetic, and
            creative community members to acquire a special status and help shape the
            future of Aleph Zero.
          </p>
        </div>
        <div className="w-1/2">
          <div>
            <img src={ambassador} alt="" className="art border rounded-xl p-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorHero;
