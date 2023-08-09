import { useNavigate } from "react-router-dom";
import React from "react";
import { hero } from "../../assets";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { paraAnim } from "../../animation/motion";
import { buttonAnim } from "../../animation/motion";
import { imgAnim } from "../../animation/motion";
import male from "./../../assets/image/male.png";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Model/Experience";

function Hero() {
  const navigate = useNavigate();

  const navigateToCustomisation = () => {
    navigate("/app/customizer");
  };
  return (
    <div className=" text-center justify-center items-center h-screen">
      <hr className="w-[70%] m-auto border-[1px] border-[#7954ff] rounded-lg" />
      <hr className="w-[60%] m-auto border-[2px] border-[#993fff] rounded-lg mt-[3px]" />
      <hr className="w-[40%] m-auto border-[3px] border-[#9f4bff] rounded-lg mt-[3px]" />
      <div className="space-y-10 flex-col justify-center p-10">
        <span className="text-[#D8BFD8] rounded-[10px] border-2 w-28 font-semibold p-2 max-[300px]:flex max-[600px]:justify-center">
          ✨ AI-Powered 3D T-Shirts
        </span>
        <h1 className="mt-5 text-heading font-semibold min-[600px]:text-5xl max-[600px]:text-4xl min-[600px]:leading-normal max-[600px]:leading-tight max-[600px]:text-center ">
          <span className="font-semibold text-7xl max-sm:text-[50px] max-sm:leading-[60px] leading-[100px] text-transparent bg-clip-text text-[#ffceff] bg-gradient-to-r from-violet-600 to-pink-200">
            Elevate Your Style
          </span>{" "}
          <br className="sm:block hidden" />
          <h1 className="mb-10  font-semibold text-4xl ss:text-[72px] max-sm:text-[25px] leading-[100px] ss:leading-[100.8px] text-[#ffffff] ">
            with Intelligent
          </h1>
        </h1>
        <div class="title-wrapper text-center">
          <h1 class="sweet-title mb-8">
            <span data-text="FASHION" className=" max-sm:text-[70px]">
              FASHION
            </span>
          </h1>
        </div>
        <button
          onClick={navigateToCustomisation}
          className="rounded-[10px] w-44 p-3 bg-[#4907fd66] text-[#b4ffbe] border-transparent hover:text-white hover:bg-[#6e54ff]   transition duration-500 ease-in-out"
        >
          Design Now
        </button>
      </div>
      {/* <div className="flex-1 flex-col justify-center h-screen object-contain">
        <Canvas
          camera={{
            position: [0, -8, 5],
            fov: 30,
            zoom: 1.3,
            up: [0, 5, 4],
            near: 0.8,
          }}
          style={{ height: "140vh", width: "100%", marginTop: "10%" }}
        >
          <Experience />
        </Canvas>
      </div> */}
    </div>
  );
}

export default Hero;
