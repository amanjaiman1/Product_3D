import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { newLogo } from "../../assets";
import Button from "../../components/Button";
import "../../index.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
      className={`navbox flex justify-between items-center max-w-[95%] rounded-2xl h-[70px] sticky top-3 z-10 mx-auto border border-solid border-white border-opacity-25 rounded-20 bg-transparent backdrop-blur-md `}
    >
      <div className="flex justify-start ml-6">
        <img src={newLogo} alt="Fashion Forge logo" className="w-24 h-24 mt-0.5" />
      </div>
      <div>
        <ul className="hidden sm:hidden md:flex lg:flex space-x-12 font-normal text-[15px] justify-center items-center mr-10">
          <li>
            <a href="/" className="group text-[#D8BFD8] transition duration-100">
              Home
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600"></span>
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="group text-[#D8BFD8] transition duration-100"
            >
              Contributor
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600"></span>
            </a>
          </li>
          <li>
            <a
              href="/guidebook"
              className="group text-[#D8BFD8] transition duration-100"
            >
              Guidebook
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600"></span>
            </a>
          </li>
          <li>
            <a href="/blog" className="group text-[#D8BFD8] transition duration-100">
              Blog
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600"></span>
            </a>
          </li>
          <li className="text-[#D8BFD8] hidden md:hidden lg:block">
            <Button className="rounded-xl w-[100%] hover:bg-violet-600 bg-blue-900 md:w-auto px-4 py-2 text-center">
              Try Now
            </Button>
          </li>
        </ul>
      </div>
      {/* MOBILE VIEW */}
      <div className="ml-auto mr-5 mt-[-1rem] lg:hidden">
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu" style={{ width: "70%", textAlign: "right" }}>
          <Link
            to="/"
            className={`link ${location.pathname === "/" ? "active" : ""}`}
            onClick={toggleMobileMenu}
            style={{ justifyContent: "flex-end" }}
          >
            Home
          </Link>
          <Link
            to="/guidebook"
            className={`link ${location.pathname === "/guidebook" ? "active" : ""}`}
            onClick={toggleMobileMenu}
            style={{ justifyContent: "flex-end" }}
          >
            Guide Book
          </Link>
          <Link
            to="/customize"
            className={`link ${location.pathname === "/customize" ? "active" : ""}`}
            onClick={toggleMobileMenu}
            style={{ justifyContent: "flex-end" }}
          >
            Customize
          </Link>
          <Link
            to="/contact"
            className={`link ${location.pathname === "/contact" ? "active" : ""}`}
            onClick={toggleMobileMenu}
            style={{ justifyContent: "flex-end" }}
          >
            Contact Us
          </Link>
          <Link
            to="/faq"
            className={`link ${location.pathname === "/faq" ? "active" : ""}`}
            onClick={toggleMobileMenu}
            style={{ justifyContent: "flex-end" }}
          >
            FAQ's
          </Link>
          <button
            className="justify-center border-[1px] p-2 rounded-md"
            style={{ justifyContent: "center" }}
          >
            Try Free
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
