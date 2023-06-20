import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "./wolf.jpg";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Card.css";
import cardData from "./CardData";

const Testimonials = () => {
  return (
    <div className="px-6 py-6 md:py-0 md:p-10 mb-10 md:mb-16 lg:pl-44 lg:pr-44 md:items-center">
      <div className="h-[25rem] md:h-96">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="te bg-[#F8F9FF] h-60 md:h-48 w-[90%] md:w-[50%] p-7 rounded-[1.5rem]">
                <div className="flex flex-row gap-x-4 pt-4 justify-center items-center">
                  <div>
                    <img src={img} alt={card.name} className="max-w-[60px]" />
                  </div>
                  <div className="flex items-start flex-col">
                    <h1 className="font-semibold text-xl h-full">{card.name}</h1>
                    <p className="font-normal">{card.role}</p>
                  </div>
                </div>
                <div className="mt-6 items-center">
                  <p className="text-slate-500">{card.testimonial}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
