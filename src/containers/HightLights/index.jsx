import React from "react";
import FeatureCard from "../../components/FeatureCard";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, imgAnim } from "../../animation/motion";
import { services } from ".";

const HightLights = ({ index, title, icon }) => {
  return (
    <div className="pb-10">
      {/* <div>High Lights</div> */}
      <div>
        <div className="feature-header my-3">
          <hr className="hr-text" />
          <div className="items-center mb-10">
            <h1 className="highlightHeading purples text-3xl font-semibold text-[#9400D3] items-center p-5  max-[300px] mx-auto justify-center text-center">
              ✨ Essential Product Highlights and Features
            </h1>
            <hr className=" w-[20%] m-auto mt-10 border-[2px] border-[#7954ff] rounded-lg" />
          </div>

          <div className="text-[#D8BFD8]  feature-desc text-center mx-auto px-4 leading-loose">
            Revolutionize your fashion experience with our 3D T-Shirts' key features.
            Discover unparalleled depth, vibrant colors, and dynamic designs that
            come to life, thanks to cutting-edge AI technology. Elevate your style
            with intelligent fashion.
          </div>
        </div>
        <div className="flex m-10 justify-center items-center flex-wrap">
          {services.map((item) => {
            return (
              <FeatureCard
                title={item.title}
                color={item.color}
                icon={item.icon}
                desc={item.desc}
                className="rounded-2xl justify-around items-center sm:w-80 md:w-96"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HightLights;
