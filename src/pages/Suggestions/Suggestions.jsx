import React from "react";
import suggestion from "../../assets/image/suggestion.webp";

const Suggestions = () => {
  return (
    <div className="grid place-items-center">
      <div className="grid place-items-center faq  w-[90%] md:w-[80%] lg:w-[70%] border-2 rounded-lg p-4 border-purple-700 mt-[5%] mb-[5%]">
        <div className="grid lg:grid-flow-col mt-[5%] ">
          <div className="p-4 lg:ml-14 lg:text-left text-center">
            <p className="text-xl md:2xl lg:3xl text-purple-500 ">Have any</p>
            <p className="lg:text-5xl md:text-4xl text-3xl lg:mt-4 text-white font-medium">
              Suggestion ?
            </p>
            <p className="mt-4 opacity-75">Your suggestions are invaluable to us.</p>
          </div>
          <div className="flex justify-center lg:mr-[-25%]">
            <img src={suggestion} className="w-[40%] mt-[-5%]" />
          </div>
        </div>
        <div className="mt-[5%] w-[90%] md:w-[80%] lg:w-[70%] faq p-4">
          <p className="text-center lg:text-2xl md:text-xl text-l text-purple-500 mt-5">
            What kind of suggestions we are looking for?
          </p>
          <p className="mt-[5%] text-justify text-slate-200 lg:text-center">
            We're interested in hearing your thoughts on anything related to Fashion
            Forge 3D, including:
            <br />
            -New features you'd like to see
            <br />
            -Bugs you've encountered
            <br />
            -Ways to improve the user experience
            <br />
            -Ideas for new designs
          </p>
        </div>
        <div className="mt-[5%] w-[90%] md:w-[80%] lg:w-[70%] faq p-4">
          <p className="text-center lg:text-2xl md:text-xl text-l text-purple-500 mt-5">
            How can I submit a suggestion?
          </p>
          <div className=" grid place-items-center">
            <p className="mt-[5%] text-justify text-slate-200 lg:w-[90%]">
              You can submit a suggestion by filling out the form below. Please
              include as much detail as possible, so that we can better understand
              your feedback.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="
        px-4 py-4 pt-2 pb-2 font-poppins font-medium
         text-sm md:text-base text-white outline-dashed outline-purple-400 rounded-full max-w-fit mt-5 hover:bg-purple-400 hover:text-black hover:shadow-sm hover:shadow-white"
            >
              <a href="">Suggestion Form</a>
            </button>
          </div>
        </div>
        <div>
          <p className="text-center lg:text-5xl md:text-3xl text-2xl font-medium text-purple-500 mt-[10%]">
            Thank you!
          </p>
          <p className="mt-[2%] text-center text-slate-100 mb-[8%]">
            We appreciate your time and effort in helping us make Fashion Forge 3D
            the best it can be.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
