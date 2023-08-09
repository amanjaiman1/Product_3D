import React from "react";
import searchIcon from "../../assets/image/searchIcon.webp";
import { blog, query, support } from "../../assets";

const Helpcentre = () => {
  return (
    <div className="w-full">
      <div className="bg-[url(/helpbg.jpg)] w-[100%] h-[40%]">
        <div className="grid grid-flow-row justify-center items-center">
          <div class="text-6xl mt-10 text-center font-normal bg-gradient-to-r from-blue-500 via-blue-300 to-blue-200 text-transparent bg-clip-text">
            Help Center
          </div>
          <p class="mt-10 font-normal text-center text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
            How can we help you today?
          </p>
        </div>
        <div className="relative mt-[10%] md:[6%] lg:mt-[4%] ml-[50%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center w-full">
          <form className="w-[50%]">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text--900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Logos..."
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ml-20 mr-20 mt-20">
        <div className="border p-5 pb-20 pt-20 rounded-lg blogtitle helpbox">
          <div className="grid grid-flow-row place-items-center">
            <img src={query} alt="" className="w-24 h-24" />
            <p className="text-xl mt-5 text-[#D8BFD8]">Schedule a Call</p>
          </div>
        </div>
        <div className="border p-5 pb-20 pt-20 rounded-lg blogtitle helpbox">
          <div className="grid grid-flow-row place-items-center">
            <img src={support} alt="" className="w-24 h-24" />
            <p className="text-xl mt-5 text-[#D8BFD8]">Get our Support</p>
          </div>
        </div>
        <div className="border p-5 pb-20 pt-20 rounded-lg blogtitle helpbox">
          <div className="grid grid-flow-row place-items-center">
            <img src={blog} alt="" className="w-24 h-24" />
            <p className="text-xl mt-5 text-[#D8BFD8]">Read our blog</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpcentre;
