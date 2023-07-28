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
    <div className="flex justify-center items-center h-screen">
      <div className="flex-1 space-y-10 flex-col justify-center p-10">
        <span className="text-[#D8BFD8] rounded-full border-2 w-28 font-semibold p-2 rounded max-[300px]:flex max-[600px]:justify-center">
          ✨ AI-Powered 3D T-Shirts
        </span>
        <h1 className="mt-5 text-heading  font-semibold min-[600px]:text-5xl max-[600px]:text-4xl min-[600px]:leading-normal max-[600px]:leading-tight max-[600px]:text-center ">
          <span className="font-semibold text-7xl ss:text-[72px] leading-[100px] text-transparent bg-clip-text text-[#D8BFD8] bg-gradient-to-r from-violet-600 to-pink-200">
            Elevate Your Style
          </span>{" "}
          <br className="sm:block hidden" />
          <h1 className="font-semibold text-7xl ss:text-[72px] leading-[100px] ss:leading-[100.8px] text-[#D8BFD8] ">
            with Intelligent
          </h1>
          <span className="font-semibold text-7xl ss:text-[72px] leading-[75px] text-transparent bg-clip-text text-[#D8BFD8] bg-gradient-to-r from-violet-600 to-pink-200">
            Fashion
          </span>
        </h1>
        <button className="rounded-full border-2 w-48 p-3 bg-[#110F0F] hover:text-black hover:bg-white">
          Design Now
        </button>
      </div>
      <div className="flex-1 flex-col justify-center object-contain">
        <Canvas
          camera={{
            position: [0, -8, 5],
            fov: 30,
            zoom: 1.3,
            up: [0, 5, 4],
            near: 0.8,
          }}
          style={{ height: "120vh", width: "100%", marginTop: "40%" }}
        >
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}

export default Hero;
