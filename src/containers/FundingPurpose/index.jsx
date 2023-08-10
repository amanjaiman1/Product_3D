import React from "react";
import { avail, funding, money } from "../../assets";

const FundingPurpose = () => {
  return (
    <div className="w-full h-[220vh]">
      <div className="heading ml-10">
        <div className="flex mb-10">
          <span className="text-pink-600 font-semibold mr-2 text-3xl">|</span>
          <h1 className="text-white text-4xl">
            {" "}
            <span className="font-semibold">The purpose</span> of the program
          </h1>
        </div>
        <p className="text-pink-100 leading-loose text-lg">
          The goal of the Aleph Zero Ecosystem Funding Program is to fund innovations
          from developer teams that expand the capabilities, functionalities, and
          adoption of the Aleph Zero blockchain. Project ideas can range from
          proof-of-concept and early-stage companies to experienced teams with
          solutions deployed on different platforms.
        </p>
      </div>
      <div className="mt-10 flex justify-center ml-10">
        <img src={funding} alt="" className="w-[80%]" />
      </div>
      <div className="flex mt-20 ml-10">
        <span className="text-pink-600 font-semibold mr-2 text-3xl">|</span>
        <h1 className="text-white text-4xl">
          {" "}
          Available <span className="font-semibold">pool of support</span>
        </h1>
      </div>
      <div className="ml-10">
        <div className="flex justify-center items-center mt-10">
          <img src={avail} alt="" className="mt-10 w-[50%]" />
        </div>

        <p className="text-pink-100 leading-loose text-lg mt-10">
          The grants will be distributed in various tiers, depending on several
          factors, depending on your project's needs and the applicability of the
          idea.
        </p>
        <p className="text-pink-100 leading-loose text-lg ">
          Following application, verification, and the approval process, grant tiers
          are chosen by the project team in conjunction with the representatives of
          the Aleph Zero Foundation.
        </p>
        <div className="flex justify-center items-center mt-10">
          <img src={money} alt="" className="w-[50%] h-[20%] " />
        </div>
      </div>
    </div>
  );
};

export default FundingPurpose;
