import { useNavigate } from "react-router-dom";
import React from "react";
import { hero } from "../../assets";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { paraAnim } from "../../animation/motion";
import { buttonAnim } from "../../animation/motion";
import { imgAnim } from "../../animation/motion";
import male from "./../../assets/image/male.png";
function Hero() {
  const navigate = useNavigate();

  const navigateToCustomisation = () => {
    navigate("/app/customizer");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-1 space-y-10 flex-col justify-center p-10">
        <h1 className="text-8xl">
          Elevate Your Style with Custom 3D Shirt Designs!
        </h1>
        <button className="rounded-full border-2 w-48 p-3 bg-[#110F0F] hover:text-black hover:bg-white">
          Design Now
        </button>
      </div>
      <div className="flex-1 flex-col justify-center h-screen object-contain">
        <img
          width={"100%"}
          height={"100%"}
          src={male}
          className="object-contain max-h-full max-w-full"
        />
      </div>
    </div>
  );
}

export default Hero;
