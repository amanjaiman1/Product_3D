import React from "react";
import faqData from "../../store/faqData";
import Card from "../../components/FAQCard/faqCard";
import { BsSearch } from "react-icons/bs";
// import searchIcon from "../../assets/image/searchIcon.webp";

function Faq() {
  const faqCard = faqData.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <div className="grid justify-center text-white p-6 text-center pt-[6%]">
        <p className="text-lg md:text-xl lg:text-2xl text-purple-400 m-4">FAQs</p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Frequently Asked Questions
        </p>
        <p className="text-sm md:text-lg lg:text-xl mt-4 font-thin">
          Have questions? We are here to help.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="inline-flex backdrop-blur-md shadow-md shadow-slate-800 rounded-full border-2 border-purple-300 lg:w-[40%]">
          {/* <img src={searchIcon} alt="search icon" className="p-3 w-12 lg:w-16" /> */}
          <div className="p-2">
            <BsSearch className="w-auto h-8" />
          </div>
          <input
            className="w-[50vw] rounded-full p-2 outline-none bg-transparent  text-white placeholder-white"
            label="Search"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
      <div className="flex justify-center pt-[6%]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2">{faqCard}</div>
      </div>
      <div className="items-center p-[5%]">
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold text-purple-400 m-4 text-center ">
          Still have questions?
        </p>
        <p className="text-sm md:text-lg lg:text-xl mt-4 font-thin text-slate-200 text-center">
          Can't find the answer you're looking for? Please connect with our friendly
          team.
        </p>
        <div className="grid justify-center p-6 mb-[8%] md:mb-[5%] lg:mb-[2%]">
          <button
            type="button"
            className="
        px-4 py-4 pt-2 pb-2  border-2 font-poppins font-medium
         text-sm md:text-base text-white outline-none border-purple-400 rounded-full w-full hover:bg-purple-400 hover:text-black hover:shadow-sm hover:shadow-white"
          >
            <a href="/contact">Get in Touch</a>
          </button>
        </div>
      </div>
    </>
  );
}
export default Faq;
