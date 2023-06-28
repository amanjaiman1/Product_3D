import React from "react";
import FeatureCard from "../../components/FeatureCard";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/motion";
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
    <>
      <motion.div>
        <div className="mt-20 pb-40 flex gap-16 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default HightLights;
