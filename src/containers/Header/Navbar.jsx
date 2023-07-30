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
      className={`flex justify-center items-center max-w-[97%] rounded-2xl h-[90px] sticky top-3 z-10  mx-auto border border-solid border-white border-opacity-25 rounded-20 bg-transparent  shadow-[0px_5px_10px_0px_rgba(0,255,255,0.7)]  hover:shadow-[0px_10px_20px_2px_rgba(0,255,255,0.5)] backdrop-blur-md `}
    >
      <div>
        <img width={"22%"} height={"10%"} src={newLogo} alt="Fashion Forge logo" />
      </div>
      <ul className="flex space-x-12 font-semibold text-[19px] justify-center items-center">
        <li>
          <a href="#" class="group text-sky-200 transition duration-100">
            Home
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-lime-300"></span>
          </a>
        </li>
        <li>
          <a href="#" class="group text-sky-200 transition duration-100">
            Contributor
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-lime-300"></span>
          </a>
        </li>
        <li>
          <a href="#" class="group text-sky-200 transition duration-100">
            Guidebook
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-lime-300"></span>
          </a>
        </li>
        <li>
          <a href="#" class="group text-sky-200 transition duration-100">
            Blog
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-lime-300"></span>
          </a>
        </li>
        <li className="text-sky-200">
          <Button>Try Now</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
