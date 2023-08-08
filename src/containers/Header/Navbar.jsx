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
    <nav className={`flex justify-between items-center h-[90px] mb-5 p-5 `}>
      {/* ... Your existing code ... */}
      <div className="flex justify-start ml-6">
        <img src={newLogo} alt="Fashion Forge logo" className="w-24 h-24 mt-0.5" />
      </div>
      <ul className="hidden md:flex lg:flex space-x-12 font-normal text-[17px] justify-center items-center mr-10">
        {["Home", "Contributor", "Guidebook", "Blog"].map((item, index) => (
          <li key={index}>
            <a href="#" className="group text-[#d6e4ff] transition duration-100">
              {item}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600"></span>
            </a>
          </li>
        ))}
        <li className="text-[#D8BFD8] lg:block">
          <Button className="rounded-[5px] w-[100%] hover:bg-violet-600 bg-transparent hover:transition-all md:w-auto px-4 py-2 text-center">
            Try Now
          </Button>
        </li>
      </ul>
      <button
        data-collapse-toggle="navbar-dropup"
        type="button"
        className="inline-flex items-center justify-center md:hidden text-white   mr-5"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <svg
          className={`w-6 h-6 ${isMobileMenuOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div
          className={`flex flex-col md:hidden align-items items-center bg-black rounded-xl absolute top-20 right-0 p-5 justify-center ${
            isMobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
          }`}
        >
          <ul className="font-normal text-[15px] justify-center items-center mr-10">
            {["Home", "Contributor", "Guidebook", "Blog"].map((item, index) => (
              <li key={index}>
                <a href="#" className="group text-[#D8BFD8] transition duration-100">
                  {item}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600 mb-2"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
