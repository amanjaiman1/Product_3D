import React from "react";
import styles from "../../style";
import { objectFoot } from "../../assets";
import { footerLinks } from ".";

function Footer() {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={objectFoot} alt="3D-Tee" className="w-[465px] h-[265px] object-contain" />
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 mr-10">
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

    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#BFC6F0]">
      <p  className={`font-poppins font-normal text-center text-[18px] leading-[27px] text-[#63657E] mx-auto`}>
        Opensource ©2023 | 3D Tees | All Rights Reserved.
      </p>
    </div>
  </footer>
  );
}

export default Footer;
