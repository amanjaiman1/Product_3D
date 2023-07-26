import React from "react";
import faqData from "../../store/faqData";
import Card from "../../components/FAQCard/faqCard";
import searchIcon from "../../assets/image/searchIcon.webp";

function Faq() {
  const faqCard = faqData.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <div className="grid justify-center text-white p-6 text-center pt-[8%]">
        <p className="text-lg md:text-xl lg:text-2xl text-purple-400 m-4">FAQs</p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <p className="text-sm md:text-lg lg:text-xl mt-4 font-thin">
          Have questions? We are here to help.
        </p>
      </div>
      <div className="grid justify-center">
        <div className="inline-flex bg-white shadow-md shadow-slate-600 rounded-xl">
          <img src={searchIcon} alt="search icon" className="p-3 w-12 lg:w-16" />
          <input
            className="w-[50vw] lg:w-[40vw] lg:h-16 rounded-xl p-2"
            label="Search"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
      <div className="flex justify-center bg-black ">
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
        px-4 py-4 pt-2 pb-2 bg-gradient-to-r from-[#5867DD] to-[#b379ff] font-poppins font-medium
         text-sm md:text-base text-white outline-none ${styles} rounded-[5px] w-full "
            style={{
              boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px ",
              letterSpacing: "1px",
            }}
          >
            <a href="/contact">Get in Touch</a>
          </button>
        </div>
      </div>
    </>
  );
}
export default Faq;
