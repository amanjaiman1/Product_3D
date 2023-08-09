import React from "react";
import { anime1, anime2, anime3, news1, news2, news3 } from "../../assets";

const CommmunityNews = () => {
  return (
    <div className="flex ml-20 mr-20 p-5 mt-20">
      <div className="w-2/6 h-full p-5">
        <div className="flex text-3xl">
          <span className="text-pink-600 font-bold"> | </span>
          <h1 className="mr-3 ml-3 text-white">Latest</h1>
          <span className=" font-semibold text-white">News</span>
        </div>
        <div className="description mt-5">
          <p className="leading-relaxed text-[#D8BFD8]">
            The Following are our most frequented and <br />
            updated communication channels. <br />
            You name it, we've got it.
          </p>
        </div>
        <button className="border p-3 bg-pink-500 rounded-full w-[40%] mt-10 font-normal hover:bg-violet-800">
          See all news {" > "}{" "}
        </button>
      </div>
      <div className="w-4/6 h-[100%]">
        <div className="grid grid-cols-3 h-[100%] gap-4">
          <div className="border rounded-lg h-[100%] p-5 blogtitle">
            <img src={news1} alt="" />
            <h1 className="tag border border-pink-500 pl-2 pr-2 p-1 bg-pink-700 rounded-lg mt-4 w-[30%] text-sm">
              Progress
            </h1>
            <h1 className="text-white font-semibold mt-4 text-xl mb-10 hover:text-gray-500 cursor-pointer">
              Fashion Froze 3D: Unveiling the Future of Fashion and Community
              Engagement
            </h1>
            <div className="author flex justify-between mt-4 items-center">
              <div className="flex align-items items-center">
                <img src={anime1} alt="" className="w-10 h-10 rounded-full" />
                <h1 className="name ml-3 text-gray-400 text-normal">Martin</h1>
              </div>
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
          <div className="border rounded-lg h-[100%] p-5 blogtitle">
            <img src={news2} alt="" />
            <h1 className="tag border border-pink-500 pl-2 pr-2 p-1 bg-pink-700 rounded-lg mt-4 w-[40%] text-sm">
              Ambassador
            </h1>
            <h1 className="text-white font-semibold mt-4 text-xl mb-10 hover:text-gray-500 cursor-pointer">
              Fashion Froze Ambassador Program: Shaping the Future of Style Together
            </h1>
            <div className="author flex justify-between mt-4 items-center">
              <div className="flex align-items items-center">
                <img src={anime2} alt="" className="w-10 h-10 rounded-full" />
                <h1 className="name ml-3 text-gray-400 text-normal">Henry</h1>
              </div>
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
          <div className="border rounded-lg h-[100%] p-5 blogtitle">
            <img src={news3} alt="" />
            <h1 className="tag border border-pink-500 pl-2 pr-2 p-1 bg-pink-700 rounded-lg mt-4 w-[30%] text-sm">
              Branding
            </h1>
            <h1 className="text-white font-semibold mt-4 text-xl mb-10 hover:text-gray-500 cursor-pointer">
              Building a Memorable Brand: Approach to Lasting Impressions
            </h1>
            <div className="author flex justify-between mt-4 items-center">
              <div className="flex align-items items-center">
                <img src={anime3} alt="" className="w-10 h-10 rounded-full" />
                <h1 className="name ml-3 text-gray-400 text-normal">Rosy</h1>
              </div>
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

export default CommmunityNews;
