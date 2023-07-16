import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets";

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
      className={`navbar h-16 pt-[20px] pb-[60px] p-[8%] max-sm:px-0 max-sm:py-5 flex`}
    >
      <div className="pl-5">
        <Link to="/">
          <div className="mt-9 lg:hidden align-center items-center">
            <img
              className="w-50 h-40 max-sm:ml-[-5px] max-sm:h-32 max-sm:mt-[-30px] "
              src={logo}
              alt="ProductLogo"
            />
          </div>
        </Link>
      </div>
      <header class="bg-white bg-opacity-50 w-[120%] h-[60px] max-lg:hidden shadow-lg rounded-xl flex justify-between items-center">
        <div href="" class="flex-shrink-0 align-items items-center mt-1">
          <img
            class=""
            src={logo}
            alt=""
            className="w-[120px] h-[120px] max-sm:ml-[-5px] max-sm:h-32 max-sm:mt-[-30px] mr-5"
          />
        </div>
        <div class="font-medium lg:text-sm flex">
          <ul class="flex justify-around items-center ml-auto space-x-10 pr-5">
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
              FAQ's
            </Link>
            <Link
              to="/blog"
              className={`link ${location.pathname === "/blog" ? "active" : ""}`}
            >
              Blog
            </Link>
            <Link
              to="https://discord.gg/YK3UYU7s"
              className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:bg-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-discord"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />{" "}
              </svg>
            </Link>
          </ul>
          <div class="flex items-center px-4 lg:px-6 xl:px-8">
            <button
              className="tryfree-btn justify-center p-2 rounded-md h-10"
              onClick={() => navigate("/signup")}
            >
              Try Free
            </button>
          </div>
        </div>
      </header>
      {/* <div className="pl-5">
        <Link to="/">
          <div className="mt-9 align-center items-center">
            <img
              className="w-50 h-40 max-sm:ml-[-5px] max-sm:h-32 max-sm:mt-[-30px] "
              src={logo}
              alt="ProductLogo"
            />
          </div>
        </Link>
      </div>
      <div className="ml-auto max-lg:hidden space-x-10 pr-5">
        <Link to="/" className={`link ${location.pathname === "/" ? "active" : ""}`}>
          Home
        </Link>
        <Link
          to="/guidebook"
          className={`link ${location.pathname === "/guidebook" ? "active" : ""}`}
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

        <button className="tryfree-btn justify-center p-2 rounded-md h-10" onClick={()=>navigate("/signup")}>
          Try Free
        </button>
      {/* </div> */}

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
            {" "}
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
