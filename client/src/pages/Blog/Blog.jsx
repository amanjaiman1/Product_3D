import React from "react";
import blogbar from "../../assets/image/blogbar.png";
import searchIcon from "../../assets/image/searchIcon.jpg";
import blogImage1 from "../../assets/image/blogImage1.png";
import ceo from "../../assets/image/ceo.png";
import Card from "../../components/BlogCard/bcard";
import blogData from "../../store/blogData";
import NewsLetter from "../../containers/NewsLetter";

function Blog() {
  const blogCard = blogData.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="grid justify-center">
        <img src={blogbar} alt="blog bar" className="w-[96vw]" />
      </div>
      <div className="grid justify-center md:mt-[-25px] mt-[-15px]">
        <div className="inline-flex bg-white shadow-lg rounded-xl">
          <img
            src={searchIcon}
            alt="search icon"
            className="p-3 w-12 lg:w-16"
          />
          <input
            className="w-[50vw] lg:w-[40vw] lg:h-16 rounded-xl p-2"
            label="Search"
            placeholder="Search for articles"
            type="search"
          />
        </div>
      </div>
      <div className="sm:grid justify-center hidden">
        <div className="inline-flex font-normal text-sm">
          <div className="w-auto h-auto border border-spacing-2 border-slate-300 shadow-lg rounded-3xl p-2 text-slate-600 m-4">
            ALL POSTS
          </div>
          <div className="w-auto h-auto border border-spacing-2 border-slate-300 shadow-lg rounded-3xl p-2 text-slate-600 m-4">
            T-SHIRT DESIGN TIPS
          </div>
          <div className="w-auto h-auto border border-spacing-2 border-slate-300 shadow-lg rounded-3xl p-2 text-slate-600 m-4">
            PRINTING TECHNIQUES
          </div>
          <div className="w-auto h-auto border border-spacing-2 border-slate-300 shadow-lg rounded-3xl p-2 text-slate-600 m-4">
            FASHION TRENDS
          </div>
        </div>
      </div>
      <div className="md:inline-flex justify-center lg:m-6">
        <img
          src={blogImage1}
          alt="blogImage 1"
          className="md:w-2/4 md:m-4 m-2"
        />
        <div className="flex flex-col md:w-2/4">
          <p className="text-slate-500 text-sm lg:text-lg m-4">
            T-SHIRT DESIGN TIPS
          </p>
          <p className="text-blue-900 font-extrabold text-lg md:text-2xl lg:text-4xl m-4">
            Mastering the Art: Essential Tips for Creating Eye-Catching T-shirt
            Designs
          </p>
          <p className="text-slate-800 font-light text-xs lg:text-lg m-4">
            Discover the essential tips and techniques you need to master the
            art of creating eye-catching T-shirt designs. From color selection
            to typography, this article provides expert guidance to help you
            craft stunning designs that make a lasting impression.
          </p>
          <div className="inline-flex md:mb-6">
            <img src={ceo} alt="ceo image" className="w-auto ml-4" />
            <div className="flex flex-col m-6">
              <p className="font-bold">AMAN JAIMAN</p>
              <p className="font-light text-slate-600">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-blue-900 font-extrabold text-lg lg:text-4xl m-4 grid justify-center">
          Our Articles
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center">
          {blogCard}
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

export default Blog;
