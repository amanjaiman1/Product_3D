import React from "react";
import Group1 from "../../assets/guideImage/Group 1.png";
import Group2 from "../../assets/guideImage/Group 2.png";
import Group3 from "../../assets/guideImage/Group 3.png";
import EC from "../../assets/guideImage/EC.png";

function GuideBook() {
  return (
    <div className="bg-black  text-white">
      {/*----------------------- Title of page------------------------------- */}
      <section className="w-[100%] sm:mt-4 p-4">
        <div className="grid justify-center text-white p-6 text-center pt-[8%]">
          <p className="text-lg md:text-xl lg:text-2xl text-purple-400 m-4">
            Guidebook
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            3D T-shirt Mastery
          </p>
          <p className="text-sm md:text-lg lg:text-xl mt-4 font-thin">
            Here is a whole guide to style your T-shirts as per your designs.
          </p>
        </div>

        {/* ------------------------Introduction------------------------------- */}

        <div className="grid md:grid-flow-col justify-items-center p-4">
          <div className="w-[60%] md:w-[90%] lg:w-[100%] p-4">
            <img src={Group2} />
          </div>
          <div className="grid p-6 text-justify align-text-bottom w-[90%] lg:w-[80%] md:p-2 lg:mt-[5rem] md:mt-[0rem] md:w-[90%] lg:text-2xl">
            <p>
              <div className="flex justify-center">
                <span className="font-normal text-normal md:text-xl lg:text-4xl p-2">
                  What is T-shirt Designing?
                </span>
                <br />
              </div>
              <div className=" text-slate-300 opacity-70 font-light text-sm lg:text-base">
                3D T-shirt designing refers to the process of creating visually
                appealing and lifelike designs on T-shirts using three-dimensional
                elements and techniques. By utilizing software and tools, you can add
                depth, textures, shadows, and special effects to your designs,
                resulting in immersive visuals that enhance the overall appearance of
                the T-shirt.
              </div>
            </p>
          </div>
        </div>
      </section>
      {/* ---------------------Design your style------------------------------ */}
      <section className="w-[100%]">
        <p className="lg:text-5xl md:text-4xl text-3xl text-white font-semibold text-center p-4 mb-4">
          Design your style
        </p>
        <div className=" overflow-y-auto scrollbar-none ease-linear flex flex-wrap justify-center">
          <div className="">
            <div className="w-[15rem] h-[20rem] bg-green-200 m-4 rounded-2xl">
              <p className="p-2 text-center pt-10 opacity-60 text-black">
                You need to choose a t-shirt style. There are many different styles
                to choose from.
                <br />
                Select your favorite color, for the T-shirt you are designing.
              </p>
            </div>
            <div className="w-[15rem] h-[3.2rem] bg-green-300 m-4 -mt-2 rounded-2xl ">
              <p className="p-3 text-center text-lg text-black opacity-70 font-semibold">
                Step: 1
              </p>
            </div>
          </div>
          <div className="">
            <div className="w-[15rem] h-[20rem] bg-green-200 m-4 rounded-2xl">
              <p className="p-2 text-center pt-10 opacity-60 text-black">
                Enter the customizer text, you would like to display. Adjust where
                you want it to be placed.
                <br />
                Choose the logo you'll be having on your T-shirt.
              </p>
            </div>
            <div className="w-[15rem] h-[3.2rem] bg-green-300 m-4 -mt-2 rounded-2xl ">
              <p className="p-3 text-center text-lg  text-black opacity-70 font-semibold">
                Step: 2
              </p>
            </div>
          </div>
          <div className="">
            <div className="w-[15rem] h-[20rem] bg-green-200 m-4 rounded-2xl">
              <p className="p-2 text-center pt-10 opacity-60 text-black">
                You can zoom in and out, rotate your T-shirt to design it. This will
                help you create your designs more closely and enjoy the 3D
                experience.
              </p>
            </div>
            <div className="w-[15rem] h-[3.2rem]  bg-green-300 m-4 -mt-2 rounded-2xl ">
              <p className="p-3 text-center text-lg  text-black opacity-70 font-semibold">
                Step: 3
              </p>
            </div>
          </div>
          <div className="">
            <div className="w-[15rem] h-[20rem] bg-green-200 m-4 rounded-2xl">
              <p className="p-2 text-center pt-10 opacity-60 text-black">
                Once done with your design, just save it. You can look at your
                designs by visiting the recent designs and your favorite ones remain
                in favorite bar.
              </p>
            </div>
            <div className="w-[15rem] h-[3.2rem] bg-green-300 m-4 -mt-2 rounded-2xl">
              <p className="p-3 text-center text-lg  text-black opacity-70 font-semibold">
                Step: 4
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --------------Flaunt your designs------------------ */}
      <section>
        <p className="lg:text-5xl md:text-4xl text-3xl text-white font-semibold text-center p-4 mt-8">
          Flaunt your Designs
        </p>
        <div className="grid md:grid-flow-col justify-items-center">
          <p className="text-justify md:text-xl mt-[3rem] m-[2rem] text-slate-300 opacity-70 font-light text-sm lg:text-2xl lg:w-[80%] lg:mt-[12rem]">
            Meticulously crafted with attention to detail, your designs are works of
            art. When you've created styles that you're particularly proud of, you
            can share them with others or save them for future use. You can also
            export them as a PNG file. Now its your turn to flaunt your desings on
            your favorite social handles.
          </p>
          <div className="w-[50%] md:w-[80%] lg:w-[100%] p-4">
            <img src={Group1} />
          </div>
        </div>
      </section>
      {/* -------------------Additional Tips------------------- */}
      <section>
        <p className="lg:text-5xl md:text-4xl text-3xl text-white font-semibold text-center p-4 mb-8">
          Additional Tips
        </p>
        <div className="flex justify-center">
          <img className=" w-[80%] lg:w-[80%]" src={Group3} />
        </div>
      </section>
      <section className="">
        <p className="lg:text-5xl md:text-4xl text-3xl text-white font-semibold text-center p-6 mt-6 mb-8">
          Enjoy Creating
        </p>
        <div className="flex justify-center p-4 -mt-14">
          <img className="pt-4 w-[80%]" src={EC} />
        </div>
      </section>
    </div>
  );
}

export default GuideBook;
