import React from "react";
import Marquee from "react-fast-marquee";
import "./Card.css";
import cardData from "./CardData";

const Testimonials = () => {
  return (
    <div className="px-6 py-6 md:py-0 md:p-10 mb-10 md:mb-16 lg:pl-44 lg:pr-44 md:items-center">
      <div className="h-[25rem] md:h-96 mb-[40vh] mt-[-15%] ">
        <Marquee
          direction="left"
          speed={50}
          gradient={false}
          gradientWidth={2}
          className="myMarquee"
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex items-center h-screen w-full justify-center"
            >
              <div className="max-w-xs mx-4">
                <div className="bg-black shadow-xl rounded-lg py-3">
                  <div className="photo-wrapper p-2">
                    <img
                      className="w-32 h-32 rounded-full mx-auto"
                      src={card.imageUrl}
                      alt={card.name}
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-center text-xl text-white font-medium leading-8">
                      {card.name}
                    </h3>
                    <div className="text-center text-[#D8B7B7] text-xs font-semibold">
                      <p>{card.role}</p>
                    </div>
                    <div className="text-center my-3"></div>
                    <div className="text-center">
                      <p className="text-[#aea3d0]">{card.testimonial}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;
