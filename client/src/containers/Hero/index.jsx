import { useNavigate } from "react-router-dom";
import React from "react";
import { hero } from "../../assets";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { paraAnim } from "../../animation/motion";
import { buttonAnim } from "../../animation/motion";
import { imgAnim } from "../../animation/motion";
import "../Hero/homeUI.css";
function Hero() {
  const navigate = useNavigate();

  const navigateToCustomisation = () => {
    navigate("/tshirt-customisation");
  };
  return (
    <div className="justify-center items-center heroUI">
      <div className="flex-1">
        <motion.div
          variants={paraAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <span className="text-primary bg-hero-badge-bg bg-opacity-60 text-opacity-70 font-semibold p-2 rounded max-[600px]:flex max-[600px]:justify-center">
            AI-Powered 3D T-Shirts
          </span>
        </motion.div>
        <div className="py-3">
          <motion.h1
            variants={paraAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60 }}
            // className="mt-5 text-heading font-semibold min-[600px]:text-5xl max-[600px]:text-4xl min-[600px]:leading-normal max-[600px]:leading-tight max-[600px]:text-center ">
            className="mt-5 text-heading font-semibold title"
          >
            Elevate Your Style with Intelligent Fashion
          </motion.h1>
          <motion.p
            variants={paraAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50 }}
            className="text-secondary font-normal pt-3 leading-loose max-[600px]:text-center"
          >
            Indulge in the mesmerizing world of 3D fashion and elevate your style
            with our extraordinary collection of vibrant designs.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={buttonAnim}
          className="pt-3 max-[600px]:flex max-[850px]:justify-center"
        >
          <button
            onClick={navigateToCustomisation}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-pink-500 hover:to-purple-500
            text-white font-semibold py-4 px-6 rounded-[10px] shadow-lg
             transform transition-transform ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-5a1 1 0 011-1h3a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 01-1-1zm1-7a1 1 0 011-1h4a1 1 0 010 2h-4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Design Now
            </span>
          </button>
        </motion.div>
      </div>
      <motion.div
        variants={imgAnim}
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        whileInView={{
          scale: [0, 1],
          opacity: 1,
        }}
        transition={{ duration: 0.84, delay: 0.1 }}
        className="flex-3"
      >
        <img src={hero} alt="hero image" className="heroimg" />
      </motion.div>
    </div>
  );
}

export default Hero;
