import React from "react";
import {
  anime1,
  anime2,
  anime3,
  news1,
  news2,
  news3,
  video1,
  video2,
  video3,
} from "../../assets";

const CommunityVideos = () => {
  return (
    <div className="flex ml-20 mr-20 p-5 mt-20">
      <div className="w-2/6 h-full p-5">
        <div className="flex text-3xl">
          <span className="text-pink-600 font-bold"> | </span>
          <h1 className="mr-3 ml-3 font-semibold text-white">Latest</h1>
          <span className=" text-white">Videos</span>
        </div>
        <div className="description mt-5">
          <p className="leading-relaxed text-[#D8BFD8]">
            Learn more about Fashion Froze 3D <br />
            Watch tutorials, catch up with <br />
            event recaps and more.
          </p>
        </div>
        <button className="border p-3 bg-pink-500 rounded-full w-[60%] mt-10 font-normal hover:bg-violet-800">
          Explore Youtube Channel {" > "}{" "}
        </button>
      </div>
      <div className="w-4/6 h-[100%]">
        <div className="grid grid-cols-3 h-[100%] gap-4">
          <div className="border rounded-lg h-[100%] p-5 ">
            <img src={video1} alt="" />
            <h1 className="tag border border-pink-500 pl-2 pr-2 p-1 bg-pink-700 rounded-lg mt-4 w-[30%] text-sm">
              Branding
            </h1>
            <h1 className="text-white font-semibold mt-4 text-xl mb-10 hover:text-gray-500 cursor-pointer">
              Building a Brand From Scratch: Tips and Insights for Success
            </h1>
            <div className="author flex justify-between mt-4 items-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
                </svg>
                <h1 className="ml-2 text-gray-400 text-sm">May 30, 2023.</h1>
              </div>
            </div>
          </div>
          <div className="border rounded-lg h-[100%] p-5">
            <img src={video2} alt="" />
            <h1 className="tag border border-pink-500 pl-2 pr-2 p-1 bg-pink-700 rounded-lg mt-4 w-[40%] text-sm">
              Marketing
            </h1>
            <h1 className="text-white font-semibold mt-4 text-xl mb-10 hover:text-gray-500 cursor-pointer">
              Engaging with Your Audience: Strategies for Building Connections
            </h1>
            <div className="author flex justify-between mt-4 items-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
                </svg>
                <h1 className="ml-2 text-gray-400 text-sm">July 02, 2023.</h1>
              </div>
            </div>
          </div>
          <div className="border rounded-lg h-[100%] p-5">
            <img src={video3} alt="" />
            <h1 className="tag border border-pink-500 pl-2 pr-2 p-1 bg-pink-700 rounded-lg mt-4 w-[30%] text-sm">
              Content
            </h1>
            <h1 className="text-white font-semibold mt-4 text-xl mb-10 hover:text-gray-500 cursor-pointer">
              Unlocking Success with Digital Content: Strategies for Maximum
              Engagement
            </h1>
            <div className="author flex justify-between mt-4 items-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
                </svg>
                <h1 className="ml-2 text-gray-400 text-sm">Aug 01, 2023.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityVideos;
