import React from "react";
import styles from "../../style";
import { objectFoot } from "../../assets";
import { footerLinks } from "./index";

// btn
const Button = ({ styles }) => {
  return (
    <button type='button' 
      className={`
        py-4 px-6 
        bg-[#5867DD] 
        font-poppins font-medium 
        text-[18px] text-[#FFF5FB] 
        outline-none ${styles} 
        rounded-[15px]
        w-full md:w-auto h-[49px] md:ml-0 max-sm:w-[49px] max-sm:h-[67px]  hover:shadow-lg transition-shadow
      `}>
      Lets Create
    </button>
  )
}

function Footer() {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className={`${styles.flexStart} md:flex-row flex-col mb-2 w-full`}>

{/* img */}

      <div 
        className="flex-1 flex flex-row justify-center md:justify-start mr-10 lg:flex-col" 
        style={{ 
          paddingRight: '3rem', 
          marginLeft: 'auto',
        }}
      >
        <img src={objectFoot} alt="3D-Tee" className="w-[465px] h-[250px] object-contain" />
      </div>

{/* foot links */}

      <div className="flex-[1.5] w-full flex flex-row justify-between ss:flex-wrap md:mt-0 mr-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">

            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-[#090F4E]">
              {footerLink.title}
            </h4>

            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-[#63657E] hover:text-[#6058f2] cusror-pointer ${styles.index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}`}>
                  {link.name}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

{/* btn */}

      <div className="flex-1 mt-10 md:mb-5 flex justify-center items-center">
          <Button />
      </div>

    </div>

{/* copyright */}

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#BFC6F0]">
      <p  className={`font-poppins font-normal text-center text-[12px] leading-[27px] text-[#63657E] mx-auto`}>
        Opensource ©2023 | Fashion Forge 3D | All Rights Reserved.
      </p>
    </div>

  </footer>
  );
}

export default Footer;
