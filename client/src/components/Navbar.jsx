import React from 'react'
import Logo from "../assets/3D-Logo.png"
const Navbar = () => {
  return (
    <header class="bg-white">
    <nav class="flex justify-between items-center w-[92%] py-5 mx-auto">
      <div>
        <img
        src={Logo}
        alt="logo"
        class="w-16" />
      </div>
      <div>
        <ul class="fontsize-25px font-bold flex items-center gap-[4vw]">
          <li>
            <a class="hover:text-gray-500" href="#">Home</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="#">Guide Book</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="#">Customize</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
          <button class="bg-[#EFBD48] text-black font-bold px-5 py-2 rounded-md hover:bg-[#8F712D]">Sign In</button>
      </div>
    </nav>
  </header>
  )
}

export default Navbar