import React from "react";
import {
  bill,
  blog,
  creative,
  query,
  setting,
  started,
  support,
  troubleshooting,
  tutorial,
} from "../../assets";

const Needhelp = () => {
  return (
    <div className="w-full mt-[5%]">
      <div className="grid grid-flow-row place-items-center">
        <h1 className="text-4xl text-violet-400">Need help ?</h1>
        <p className="text-lg mt-5">Check out our serivces to get started</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ml-20 mr-20 mt-10">
        <div className="border p-5 pb-20 pt-20 rounded-lg blogtitle helpbox">
          <div className="flex flex-col justify-center items-center">
            <img src={started} alt="" className="w-24 h-24" />
            <h1 className="text-xl mt-5 text-violet-300">Getting Started</h1>
            <p className="text-center mt-5 leading-relaxed text-gray-300">
              Set up your Fahsion Froze account and start to customize your t-shirt
            </p>
          </div>
        </div>
        <div className="border p-5 pb-20 pt-20 rounded-lg blogtitle helpbox">
          <div className="flex flex-col justify-center items-center">
            <img src={creative} alt="" className="w-24 h-24" />
            <h1 className="text-xl mt-5 text-violet-300">Design tips to start</h1>
            <p className="text-center mt-5 leading-relaxed text-gray-300">
              "Design an intuitive Help Center for seamless user assistance and
              engagement."
            </p>
          </div>
        </div>
        <div className="border p-5 pb-20 pt-20 rounded-lg blogtitle helpbox">
          <div className="flex flex-col justify-center items-center">
            <img src={setting} alt="" className="w-24 h-24" />
            <h1 className="text-xl mt-5 text-violet-300">Settings & Preferences</h1>
            <p className="text-center mt-5 leading-relaxed text-gray-300">
              Adjust notification, set up signatures, and manage aliases
            </p>
          </div>
        </div>
        <div className="border p-5 pb-20 pt-20 rounded-lg blogtitle helpbox">
          <div className="flex flex-col justify-center items-center">
            <img src={bill} alt="" className="w-24 h-24" />
            <h1 className="text-xl mt-5 text-violet-300">Teams & Billings</h1>
            <p className="text-center mt-5 leading-relaxed text-gray-300">
              Manage your workspace settings and members
            </p>
          </div>
        </div>
        <div className="border p-5 pb-20 pt-20 rounded-lg blogtitle helpbox">
          <div className="flex flex-col justify-center items-center">
            <img src={tutorial} alt="" className="w-24 h-24" />
            <h1 className="text-xl mt-5 text-violet-300">Step-by-Step Tutorial</h1>
            <p className="text-center mt-5 leading-relaxed text-gray-300">
              Join our interactive sessions, enriching the t-shirt customization
              journey with clear visuals and user-friendly guidance
            </p>
          </div>
        </div>
        <div className="border p-5 pb-20 pt-20 rounded-lg blogtitle helpbox">
          <div className="flex flex-col justify-center items-center">
            <img src={troubleshooting} alt="" className="w-24 h-24" />
            <h1 className="text-xl mt-5 text-violet-300">TroubleShooting</h1>
            <p className="text-center mt-5 leading-relaxed text-gray-300">
              Find answers to common issues and questions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Needhelp;
