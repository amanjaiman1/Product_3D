import React from "react";
import styles from "../../style";
import { objectFoot } from "../../assets";
import { footerLinks } from "./index";
import { imgAnim } from "../../animation/motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// btn
const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`
        py-4 px-6 bg-gradient-to-r from-[#5867DD] to-[#b379ff] font-poppins font-medium
         text-[18px] text-white outline-none ${styles} rounded-[5px] w-full md:w-auto h-[49px]
          md:ml-0 max-sm:w-auto max-sm:h-[67px]
      `}
      style={{
        boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px ",
        letterSpacing: "1px",
      }}
    >
      Let's Create
    </button>
  );
};

function Footer() {
  const renderFooterLinks = () => {
    return footerLinks.map((footerLink) => (
      <div
        key={footerLink.title}
        className="flex flex-col ss:my-0 my-4 min-w-[150px] w-full md:w-auto mb-4 md:mb-0 md:flex-1 md:mr-4"
      >
        <h4 className="font-mono font-medium text-[20px] leading-[27px] text-[#9400D3] text-center md:text-left">
          {footerLink.title}
        </h4>

        <ul className="list-none mt-4">
          {footerLink.links.map((link, index) => (
            <li
              key={link.name}
              className={`font-poppins font-normal text-[16px] leading-[24px] text-[#D8BFD8] hover:text-[#ffff] cursor-pointer text-center md:text-left ${
                index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
              }`}
            >
              <Link to={link.link} target="">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <footer
      className={`${styles.flexCenter} ${styles.paddingY} flex-col pb-25 pt-0`}
    >
      <div className="container mx-auto mb-5 flex ">
        <div
          className={`${styles.flexStart} flex md:flex-row flex-col justify-center items-center flex-wrap`}
        >
          {/* img */}
          <motion.div
            variants={imgAnim}
            initial="hidden"
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{
              scale: [0, 1],
              opacity: 1,
            }}
            transition={{ duration: 0.84, delay: 0.1 }}
            className="flex-1 flex flex-row justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0 md:mr-4"
            style={{
              paddingRight: "2rem",
              marginLeft: "auto",
              paddingLeft: "2rem",
            }}
          >
            <img
              src={objectFoot}
              alt="3D-Tee"
              className="w-[500px] h-[250px] object-contain"
            />
          </motion.div>

          {/* foot links */}
          <div className="md:flex">{renderFooterLinks()}</div>

          {/* <div
            className="flex-1 mt-10 md:mb-10 flex justify-center
           items-center w-full md:w-auto xl:ml-[-12rem] lg:ml-[-6rem] md:ml-[-4rem] sm:ml-[0rem] max-sm:ml-[0rem]"
          >
            <Button />
          </div> */}
        </div>
      </div>

      {/* copyright */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 mb-[-35px]  border-t-[1px] border-t-[#BFC6F0]">
        <p className="font-poppins font-normal text-center text-[12px] leading-[27px] text-[#D8BFD8] mx-auto">
          Opensource ©{new Date().getFullYear()} | Fashion Froze 3D | All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
