import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { newLogo } from "../../assets";
import Button from "../../components/Button";
import "../../index.css";

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
      className={`flex justify-between items-center h-[90px] mb-5 p-5  top-0 sticky bg-black bg-opacity-40 z-20 backdrop-blur-md`}
    >
      {/* ... Your existing code ... */}
      <div className="flex justify-start ml-6">
        <Link to="/">
          {" "}
          {/* Set the Home route */}
          <img src={newLogo} alt="Fashion Forge logo" className="w-24 h-24 mt-0.5" />
        </Link>
      </div>
      <ul className="hidden md:flex lg:flex space-x-12 font-normal text-[17px] justify-center items-center mr-10">
        {["Home", "Contributor", "Guidebook", "Blog", "Explore"].map(
          (item, index) => (
            <li key={index}>
              {item === "Home" && (
                <Link to="/">
                  {" "}
                  {/* Set the Home route */}
                  <span className="group text-[#d6e4ff] transition duration-100">
                    {item}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600"></span>
                  </span>
                </Link>
              )}
              {item === "Contributor" && (
                <Link to="/contact">
                  {" "}
                  {/* Set the Contributor route */}
                  <span className="group text-[#d6e4ff] transition duration-100">
                    {item}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600"></span>
                  </span>
                </Link>
              )}
              {item !== "Home" && item !== "Contributor" && (
                <Link to={`/${item.toLowerCase()}`}>
                  {" "}
                  {/* Set other routes */}
                  <span className="group text-[#d6e4ff] transition duration-100">
                    {item}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-violet-600"></span>
                  </span>
                </Link>
              )}
            </li>
          )
        )}
        <li className="text-[#D8BFD8] lg:block">
          <Button className="rounded-[5px] w-[100%] hover:bg-violet-600 bg-transparent hover:transition-all md:w-auto px-4 py-2 text-center">
            <Link to="/app/customizer">Try Now</Link> {/* Set the Try Now route */}
          </Button>
        </li>
      </ul>
      <button
        data-collapse-toggle="navbar-dropup"
        type="button"
        className="inline-flex items-center justify-center md:hidden text-white   mr-5"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      ></button>
      {/* Mobile View */}
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
            to="/explore"
            className={`link ${location.pathname === "/explore" ? "active" : ""}`}
            onClick={toggleMobileMenu}
            style={{ justifyContent: "flex-end" }}
          >
            Explore
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
