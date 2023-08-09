import React from "react";
import Character from "../../assets/about/first.webp";
import join from "../../assets/about/second.webp";

const About = () => {
  return (
    <div className="flex justify-center text-justify lg:text-left">
      <div className="p-4 m-4 faq border-2 border-purple-500 lg:w-[80%] md:w-[90%] w-[100%]">
        {/* ---------------About us -------------------- */}
        <div className=" grid lg:grid-flow-col items-center grid-flow-row">
          <div className="lg:ml-[10%]">
            <p className="p-4 text-2xl font-thin text-purple-500 mt-[5%]">
              Who are we?
            </p>
            <p className="text-5xl p-4 font-medium opacity-80 text-white">
              About us
            </p>
            <p className="text-l lg:text-lg p-4 opacity-70 text-white">
              Welcome to our creative haven for 3D T-shirt designing! We are thrilled
              to be your ultimate destination for designing unique, personalized
              T-shirts that truly reflect your individuality.
            </p>
          </div>
          <div>
            <img
              src={Character}
              className="character lg:justify-end p-4 mt-[6%] drop-shadow-2xl shadow-black"
            />
          </div>
        </div>
        {/*--------------- Our Mission ---------------*/}
        <div className="mt-[5%] text-center grid place-items-center">
          <p className="lg:text-5xl md:text-4xl text-3xl p-4 m-4 font-medium text-purple-500 lg:w-[80%] md:w-[90%] w-[100%]">
            Our Mission
          </p>
          <div className="flex justify-center text-justify p-4">
            <p className=" opacity-90 text-white text-sm md:text-base lg:text-lg lg:w-[80%] md:w-[90%] w-[100%]">
              Our mission is to empower everyone to become a fashion designer and
              unlock their imagination through cutting-edge 3D T-shirt designing. We
              aim to revolutionize the way you create custom apparel by providing an
              intuitive platform that combines user-friendly tools with advanced
              technology.
            </p>
          </div>
        </div>
        {/* -----------------What Sets Us Apart----------- */}
        <div className="grid place-items-center mt-[5%]">
          <p className="p-4 m-4 font-medium text-purple-500 lg:text-5xl md:text-4xl text-3xl mt-[5%] text-center lg:w-[80%] w-[90%]">
            What Sets Us Apart?
          </p>
          <ul className=" lg:w-[70%] md:w-[80%] w-[100%]">
            <li className="backdrop-blur-sm p-4 m-4 text-slate-200 border-2 border-purple-400 shadow-sm shadow-black rounded-lg text-sm md:text-base lg:text-lg">
              Seamless 3D Designing Experience: Unlike traditional design platforms,
              we take it a step further by offering a dynamic 3D interface that
              allows you to see your T-shirt come to life as you create it. This
              immersive experience ensures you have complete control over every
              element of your design.
            </li>
            <li className="backdrop-blur-sm p-4 m-4 text-slate-200 border-2 border-purple-400 shadow-sm shadow-black rounded-lg text-sm md:text-base  lg:text-lg">
              Extensive Design Options: Our vast library of high-quality graphics,
              fonts, and illustrations will inspire your creativity and cater to all
              tastes and styles. Whether you're into minimalistic designs or
              intricate patterns, we have something for everyone.
            </li>
            <li className="backdrop-blur-sm p-4 m-4 text-slate-200 border-2 border-purple-400 shadow-sm shadow-black rounded-lg text-sm md:text-base  lg:text-lg">
              User-Friendly Interface: We understand that not everyone is a design
              expert, and that's why we've crafted an interface that is simple,
              intuitive, and accessible to all. Designing your dream T-shirt is as
              easy as drag-and-drop, making the entire process enjoyable and
              stress-free.
            </li>
            <li className="backdrop-blur-sm p-4 m-4 text-slate-200 border-2 border-purple-400 shadow-sm shadow-black rounded-lg text-sm md:text-base  lg:text-lg">
              Export in Multiple Formats: Once your masterpiece is complete, you have
              the flexibility to export your designs as JPG or PNG files. This
              ensures that your artwork can be easily shared on social media,
              printed, or used in any way you desire.
            </li>
          </ul>
        </div>
        {/* -----------------Our Vision-------------- */}
        <div className=" grid place-items-center">
          <p className="lg:text-5xl md:text-4xl text-3xl p-4 m-4 mt-[5%] font-medium text-purple-500 opacity-80 text-center lg:w-[80%] md:w-[90%] w-[100%]">
            Our Vision
          </p>
          <p className="p-4 m-4 text-slate-100 text-sm md:text-base lg:text-lg lg:w-[80%] md:w-[90%] w-[100%]">
            As a team of passionate creatives, we envision a world where fashion
            knows no bounds. Through Fashion Forge 3D, we aspire to inspire a
            community of designers who embrace their uniqueness, celebrate diversity,
            and redefine fashion norms. We want our platform to be a hub for
            creativity, encouraging collaboration, and fostering a sense of
            belonging.
          </p>
        </div>
        {/* ----------------Join us Today ---------------- */}
        <div className="grid place-items-center">
          <div className="grid md:grid-flow-row lg:grid-flow-col place-items-center mt-[5%]">
            <img src={join} className="mt-[2%] p-8 lg:w-full" />
            <div className="lg:w-[80%] md:w-[90%] w-[100%] mb-[10%] faq lg:mr-[20%]">
              <div>
                <p className="p-4 m-4 mt-[5%] text-center font-medium text-purple-500 lg:text-5xl md:text-4xl text-3xl lg:w-[80%] w-[90%]">
                  Join Us Today
                </p>
                <div className="p-4 text-slate-200">
                  <p className="p-4 m-4  lg:text-lg text-sm md:text-base">
                    Whether you're an artist seeking a new canvas or an individual
                    who wants to wear their imagination proudly, [Website Name]
                    welcomes you with open arms. Create, design, and share your 3D
                    T-shirt masterpieces with the world, and let your creativity
                    shine.
                  </p>
                  <p className="p-4 m-4 text-center font-medium text-white text-sm md:text-base lg:text-lg">
                    Thank you for being a part of our vibrant community. Together,
                    let's make the world a more colorful and expressive place, one
                    T-shirt design at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
