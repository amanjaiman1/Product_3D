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
    <nav className={`flex justify-around items-center p-4 shadow-lg bg-[#0f0f0fb4]`}>
      <div>Fashion Forge</div>
      <ul className="flex space-x-10 justify-center items-center">
        <li>Home</li>
        <li>Contributors</li>
        <li>GuideBook</li>
        <li>Blog</li>
        <li>
          <Button>Try Now</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
