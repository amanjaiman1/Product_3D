import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, logoText } from "../../assets";
import { mid } from "../../assets";
const Navbar = () => {
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
      className={`navbar h-16 py-[20px] p-[5%] max-sm:px-0 max-sm:py-5 flex`}
    >
      <div className="pl-5">
        <Link to="/">
          <div className="flex mt-1 align-center items-center">
            <img
              className=" w-14 h-15"
              src={logo}
              alt=""
            />
            <img 
              src={logoText} 
              className="w-15 h-10 ml-2"
              alt="" />
          </div>
        </Link>
        {/* <p className="Brand-heading">PRODUCT 3D</p> */}
      </div>
      <div className="ml-auto max-lg:hidden space-x-10 pr-5">
        <Link
          to="/"
          className={`link ${location.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/guidebook"
          className={`link ${
            location.pathname === "/guidebook" ? "active" : ""
          }`}
        >
          Guide Book
        </Link>
        <Link
          to="/contact"
          className={`link ${location.pathname === "/contact" ? "active" : ""}`}
        >
          Contributors
        </Link>
        <Link
          to="/faq"
          className={`link ${location.pathname === "/faq" ? "active" : ""}`}
        >
          {" "}
          FAQ's
        </Link>

        <button className="tryfree-btn justify-center p-2 rounded-md h-10">
          Try Free
        </button>
      </div>

      <div className="ml-auto mr-5 lg:hidden">
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
        <div className=" mobile-menu ">
          <Link
            to="/"
            className={`link ${location.pathname === "/" ? "active" : ""}`}
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/guidebook"
            className={`link ${
              location.pathname === "/guidebook" ? "active" : ""
            }`}
            onClick={toggleMobileMenu}
          >
            Guide Book
          </Link>
          <Link
            to="/customize"
            className={`link ${
              location.pathname === "/customize" ? "active" : ""
            }`}
            onClick={toggleMobileMenu}
          >
            Customize
          </Link>
          <Link
            to="/contact"
            className={`link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onClick={toggleMobileMenu}
          >
            Contact Us
          </Link>
          <Link
            to="/faq"
            className={`link ${location.pathname === "/faq" ? "active" : ""}`}
            onClick={toggleMobileMenu}
          >
            {" "}
            FAQ's
          </Link>
          <button className="justify-center border-[1px] p-2 rounded-md">
            Try Free
          </button>
        </div>
      )}

      {/* Dark Mode Feature - will add on customizer Page later  */}

      {/* <div className="switch-container max-sm:hidden flex flex-row overflow-hidden mr-5">
        <input className="darkmode-input" type="checkbox" id="switch" checked={isDarkMode} onChange={toggleDarkMode} />
        <label htmlFor="switch">
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
          <span className="ball"></span>
        </label>
      </div> */}
    </nav>
  );
};

export default Navbar;
