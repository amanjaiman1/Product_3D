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
    <div className="flex-col p-0 pb-20">
      <p className=" w-[5%] mb-[-40px] mt-[-80px] ml-10 bg-[#6b10d3]  h-20 pointer "></p>

      <div className="flex justify-center items-center h-screen bg-[#6b10d3] shadow-lg p-10 m-10 pointer1">
        <div className="flex-1 space-y-10 flex-col justify-center p-10">
          <span className="text-[#D8BFD8] rounded-full border-2 w-28 font-semibold p-2  max-[300px]:flex max-[600px]:justify-center">
            ✨ AI-Powered 3D T-Shirts
          </span>
          
        <button className="rounded-full border-2 w-48 p-3 bg-[#110F0F] hover:text-black hover:bg-white">
          Design Now
        </button>
      </div>
      <div className="flex-1 flex-col justify-center h-screen object-contain">
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
      </div>
      </div>
    </div>
  );
}

export default Hero;
