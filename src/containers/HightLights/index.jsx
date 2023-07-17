import React from "react";
import FeatureCard from "../../components/FeatureCard";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, imgAnim } from "../../animation/motion";
import { services } from ".";

function HightLights() {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="w-[300px]  mx-10">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25, once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className=" p-2 rounded-lg  shadow-card"
        >
          <div className="rounded-lg p-4 flex min-h-[300px] flex-col shadow-card1 items-center">
            <div className="flex justify-center items-center mt-[40px]">
              <img src={icon} alt={title} className="mt-8 h-28 object-contain" />
            </div>
            <h3 className="text-white text-[23px] p-5 text-center font-bold mt-20">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen  overflow-hidden">
      <motion.div
        variants={imgAnim}
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        whileInView={{
          scale: [0, 1],
          opacity: 1,
        }}
        transition={{ duration: 0.84, delay: 0.1 }}
        className="mt-5  bg-primary bg-opacity-10 font-semibold rounded-lg pl-5 pr-5 py-2"
      >
        <h1 className="text-center text-primary">Highlights</h1>
      </motion.div>
      <motion.div>
        <div className="mt-20 pb-40 flex flex-wrap gap-16 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default HightLights;
