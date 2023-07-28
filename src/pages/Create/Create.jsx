import React from "react";

import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

function Create() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ];

  return (
    <div className="bg-black">
      <section className="h-[130vh]">
        <div className="text-center align-middle pt-40">
          <h1 className=" text-[50px]">You are</h1>
          <h1 className="create-text mt-28 text-[140px]">THE CREATOR</h1>
        </div>
      </section>
      <section className="h-[100vh] w-[100%] ">
        <div className="text-center align-middle pt-20 ">
          <h1 className="text-[50px] border-l-8 border-l-indigo-600 mb-5">
            Introducing
          </h1>
          <h1 className="mt-[15%] text-[100px] ">CUSTOMISER</h1>
          <hr className="w-[45%] m-auto" />
          <hr className="w-[40%] m-auto mt-1" />
          <hr className="w-[35%] m-auto mt-1" />
        </div>
      </section>
      <section className="h-auto w-[100%]">
        <div className="text-center align-middle pt-20">
          <h1 className=" text-[50px] ">Design</h1>
          <h1 className=" mt-5 text-[80px] border-r-2">What You Want</h1>
        </div>

        {/* Carousel Starting  */}
        <div className="pt-32 pb-32 ">
          <Carousel
            cards={cards}
            height="500px"
            width="40%"
            margin="0 auto"
            offset={2}
            showArrows={false}
          />
        </div>
      </section>
    </div>
  );
}

export default Create;
