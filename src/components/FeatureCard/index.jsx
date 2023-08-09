import React, { useState } from "react";
import "./style.css";

function FeatureCard({ title, color, icon, desc }) {
  return (
    <div className="">
      <div className="gap-y-10  m-5 p-6 flex flex-col justify-center align-items items-center box">
        <div className="rounded-lg w-20 h-20 mx-4">
          <img src={icon} alt="" className="" />
        </div>
        <div className="font-mono text-3xl font-semibold text-center text-[#9400D3]">
          {title}
        </div>
        <div className="w-285 mx-auto px-4 leading-relaxed text-center text-[#D8BFD8]">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
