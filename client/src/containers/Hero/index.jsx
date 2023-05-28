import React from "react";
import { hero } from "../../assets";
import Button from "../../components/Button";

function Hero() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex-1">
        <span style={{backgroundColor:"#F8FAFF"}} className="text-primary text-opacity-90 font-semibold p-2 rounded">
          AI-Powered 3D T-Shirts
        </span>
        <div className="py-3">
          <h1 className="text-heading font-semibold text-5xl leading-normal">
            Elevate Your Style with Intelligent Fashion
          </h1>
          <p className="text-secondry font-normal pt-3 leading-loose">
            Indulge in the mesmerizing world of 3D fashion and <br /> elevate your
            style with our extraordinary collection of <br /> vibrant designs.
          </p>
        </div>
        <div className="pt-3">
          <Button >Design Now</Button>
        </div>
      </div>
      <div className="flex-2">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
