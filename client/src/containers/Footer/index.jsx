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
        py-4 px-6 
        bg-[#5867DD] 
        font-poppins font-medium 
        text-[18px] text-[#FFF5FB] 
        outline-none ${styles} 
        rounded-[15px]
        w-full md:w-auto h-[49px] md:ml-0 max-sm:w-[49px] max-sm:h-[67px]  hover:shadow-lg transition-shadow
        max-sm:w-full
      `}
    >
      Lets Create
    </button>
  );
};

function Footer() {
  return (
    <footer
      className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
      style={{
        paddingBottom: 25,
        paddingTop: 0,
      }}
    >
      <div className="container mx-auto" style={{ marginBottom: 5 }}>
        <div
          className={`${styles.flexStart} md:flex-row flex-col mb-2 w-full
    flex flex-wrap justify-center md:justify-between`}
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
            className="flex-1 flex flex-row justify-center md:justify-start mr-10
        w-full md:w-auto mb-4 md:mb-0 md:mr-4"
            style={{
              paddingRight: "2rem",
              marginLeft: "auto",
              paddingLeft: "2rem",
            }}
          >
            <img
              src={objectFoot}
              alt="3D-Tee"
              className="w-[465px] h-[250px] object-contain w-full"
            />
          </motion.div>

          {/* foot links */}

          <div className="flex-[1.5] w-full flex flex-row justify-between md:mt-0 mr-10 cursor-pointer">
            {footerLinks.map((footerLink) => (
              <div
                key={footerLink.title}
                className="flex flex-col ss:my-0 my-4 min-w-[150px] 
          w-full md:w-auto mb-4 md:mb-0 md:flex-1 md:mr-4"
              >
                <h4
                  className="font-poppins font-medium text-[18px] leading-[27px] text-[#090F4E]
            text-center md:text-left"
                >
                  {footerLink.title}
                </h4>

                <ul className="list-none mt-4">
                  {footerLink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-[#63657E] hover:text-[#6058f2] cusror-pointer
                text-center md:text-left ${
                  styles.index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                }`}
                    >
                      <Link to={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* btn */}

          <div
            className="flex-1 mt-10 md:mb-10 flex justify-center items-center 
        w-full md:w-auto 
        xl:ml-[-12rem] lg:ml-[-6rem] md:ml-[-4rem] sm:ml-[0rem] max-sm:ml-[0rem]"
          >
            <Button />
          </div>
        </div>
      </div>

      {/* copyright */}

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#BFC6F0]">
        <p
          className={`font-poppins font-normal text-center text-[12px] leading-[27px] text-[#63657E] mx-auto`}
        >
          Opensource ©{new Date().getFullYear()} | Fashion Froze 3D | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
