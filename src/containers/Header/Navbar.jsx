import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { newLogo } from "../../assets";
import Button from "../../components/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Sticky navbar function
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", this.scrollY > 0);
  });
  return (
    <nav
      // className={`flex justify-center items-center bg-gradient-to-r max-w-[97%] rounded-2xl from-violet-50 to-black  h-[90px] sticky top-3 z-10  mx-auto `}
      className={`navbox flex justify-between items-center max-w-[95%] rounded-2xl h-[70px] sticky top-3 z-10  mx-auto border border-solid border-white border-opacity-25 rounded-20 bg-transparent backdrop-blur-md `}
    >
      <div className="flex justify-start ml-6">
        <img src={newLogo} alt="Fashion Forge logo" className="w-24 h-24 mt-0.5" />
      </div>
      <div>
        <ul className="hidden sm:hidden md:flex lg:flex  space-x-12 font-normal text-[15px] justify-center items-center mr-10">
          <li>
            <a href="#" class="group text-[#D8BFD8] transition duration-100">
              Home
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600"></span>
            </a>
          </li>
          <li>
            <a href="#" class="group text-[#D8BFD8] transition duration-100">
              Contributor
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600"></span>
            </a>
          </li>
          <li>
            <a href="#" class="group text-[#D8BFD8] transition duration-100">
              Guidebook
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600"></span>
            </a>
          </li>
          <li>
            <a href="#" class="group text-[#D8BFD8] transition duration-100">
              Blog
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600"></span>
            </a>
          </li>
          <li className="text-[#D8BFD8] hidden md:hidden lg:block">
            <Button className="rounded-xl w-[100%] hover:bg-violet-600 bg-blue-900 md:w-auto px-4 py-2 text-center">
              Try Now
            </Button>
          </li>
        </ul>
      </div>

      {isMobileMenuOpen ? (
        <button
          data-collapse-toggle="navbar-dropup"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mr-5"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <svg
            enable-background="new 0 0 32 32"
            height="32px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
              fill="#515151"
            />
          </svg>
        </button>
      ) : (
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mr-5"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <svg
            className="w-10 h-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.646 5.646a.5.5 0 01.708 0L10 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}

      {isMobileMenuOpen && (
        <div className="flex flex-col sm:flex-col md:hidden lg:hidden  align-items items-center bg-black rounded-xl absolute top-20 right-0 p-5 justify-center">
          <ul className="font-normal text-[15px] justify-center items-center mr-10">
            <li>
              <a href="#" class="group text-[#D8BFD8] transition duration-100">
                Home
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600 mb-2"></span>
              </a>
            </li>
            <li>
              <a href="#" class="group text-[#D8BFD8] transition duration-100">
                Contributor
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600 mb-2"></span>
              </a>
            </li>
            <li>
              <a href="#" class="group text-[#D8BFD8] transition duration-100">
                Guidebook
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600 mb-2"></span>
              </a>
            </li>
            <li>
              <a href="#" class="group text-[#D8BFD8] transition duration-100">
                Blog
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600"></span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
