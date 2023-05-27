import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navTshirt } from '../assets';
import "./navbar.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const currentMode = localStorage.getItem('darkMode');
    setIsDarkMode(currentMode === 'true');
    applyDarkMode(currentMode === 'true');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    applyDarkMode(newMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const applyDarkMode = (isDark) => {
    // Apply dark mode styles to your application here
    if (isDark) {
      // Apply dark mode styles
      document.documentElement.classList.add('dark-mode');
    } else {
      // Remove dark mode styles
      document.documentElement.classList.remove('dark-mode');
    }
  };

  return (
    <nav className={`nav-container navbar flex flex-row py-5 ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="pl-5">
        <Link to="/">
          <img className="w-12 justify-center align-middle" src={navTshirt} alt="Logo" />
        </Link>
          <p className="Brand-heading">PRODUCT 3D</p>
      </div>
      <div className="ml-auto max-sm:hidden mr-10 space-x-7 pr-5">
        <Link to="/">Home</Link>
        <Link to="/guidebook">Guide Book</Link>
        <Link to="/customize">Customize</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/faq"> Faq's</Link>
        <button className="tryfree-btn  justify-center border-[1px] p-2 rounded-md">Try Free</button>
      </div>

      <div className="ml-auto mr-5 sm:hidden">
        <button className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/">Home</Link>
          <Link to="/guidebook">Guide Book</Link>
          <Link to="/customize">Customize</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq"> Faq's</Link>
          <button className="justify-center border-[1px] p-2 rounded-md">Try Free</button>
        </div>
      )}


      <div className="switch-container max-sm:hidden flex flex-row overflow-hidden mr-5">
        <input type="checkbox" id="switch" checked={isDarkMode} onChange={toggleDarkMode} />
        <label htmlFor="switch">
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
          <span className="ball"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
