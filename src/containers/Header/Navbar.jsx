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
  // text-[#D8BFD8] bg-gradient-to-r from-violet-600 to-pink-200
  // shadow-lg bg-[#0f0f0fb4]
  return (
    <nav
      className={`flex justify-center items-center bg-gradient-to-r from-violet-200 to-black  h-[90px] rounded-[35px] sticky top-3 max-w-[85%] mx-auto `}
    >
      <div>
        <img width={"22%"} height={"10%"} src={newLogo} alt="Fashion Forge logo" />
      </div>
      <ul className="flex space-x-10 justify-center items-center">
        <li>
          <a href="#" class="group text-white transition duration-100">
            Home
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
          </a>
        </li>
        <li>
          <a href="#" class="group text-white transition duration-100">
            Contributor
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
          </a>
        </li>
        <li>
          <a href="#" class="group text-white transition duration-100">
            Guidebook
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
          </a>
        </li>
        <li>
          <a href="#" class="group text-white transition duration-100">
            Blog
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
          </a>
        </li>
        <li>
          <Button>Try Now</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
