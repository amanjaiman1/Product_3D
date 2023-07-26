import React from "react";
import blogbar from "../../assets/image/blogbar.webp";
import searchIcon from "../../assets/image/searchIcon.webp";
import blogImage1 from "../../assets/image/blogImage1.webp";
import ceo from "../../assets/image/ceo.webp";
import Card from "../../components/BlogCard/bcard";
import blogData from "../../store/blogData";
import NewsLetter from "../../containers/NewsLetter";
import { Link } from "react-router-dom";

function Blog() {
  const blogCard = blogData.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }} className="bg-slate-900">
      <div className="grid justify-center text-white p-6 text-center">
        {/* <img src={blogbar} alt="blog bar" className="w-[96vw]" /> */}
        <Link to="/create-post">
          <span className="group bg-gray-300 hover:bg-gray-700 text-gray-800 font-bold py-2 px-4 rounded-md w-40 ml-[140vh]">
            <button className="group-hover:text-white transition-transform">
              Create Post
            </button>
          </span>
        </Link>
        <p className="text-lg md:text-xl lg:text-3xl text-purple-400 m-4">
         
          Our Blog
        </p>
        <p className="text-4xl md:text-5xl lg:text-5xl font-semibold">
          RESOURCES AND INSIGHTS
        </p>
        <p className="text-sm md:text-lg lg:text-xl mt-4 font-thin">
          The latest industry news, interviews, technologies, and resources.
        </p>
        
      </div>
      <div className="grid justify-center">
        <div className="inline-flex bg-white shadow-md shadow-slate-600 rounded-xl">
          <img src={searchIcon} alt="search icon" className="p-3 w-12 lg:w-16" />
          <input
            className="w-[50vw] lg:w-[40vw] lg:h-16 rounded-xl p-2"
            label="Search"
            placeholder="Search for articles"
            type="search"
          />
        </div>
      </div>
      <div className="grid justify-center p-4">
        <div className="inline-flex font-normal md:text-sm text-xs">
          <div className="w-auto h-auto text-slate-300 p-2 hover:bg-purple-300 hover:font-semibold hover:text-slate-800 border rounded-2xl border-slate-500 m-2">
            All posts
          </div>
          <div className="w-auto h-auto text-slate-300 p-2 hover:bg-purple-300 hover:font-semibold hover:text-slate-800 border rounded-2xl border-slate-500 m-2">
            T-shirt design tips
          </div>
          <div className="w-auto h-auto text-slate-300 p-2 hover:bg-purple-300 hover:font-semibold hover:text-slate-800 border rounded-2xl border-slate-500 m-2">
            Printing Techniques
          </div>
          <div className="w-auto h-auto text-slate-300 p-2 hover:bg-purple-300 hover:font-semibold hover:text-slate-800 border rounded-2xl border-slate-500 m-2">
            Fashion Trends
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center lg:m-6 items-center">
        <img src={blogImage1} alt="blogImage 1" className="md:m-2 m-4 w-9/12" />
        <div className="flex flex-col md:-mt-[15rem] lg:-mt-[18rem]p-4 m-2 w-9/12 rounded-md md:backdrop-blur-md text-white font-medium">
          <p className="text-sm lg:text-lg m-2">T-SHIRT DESIGN TIPS</p>
          <p className="text-lg md:text-xl lg:text-4xl m-2 font-semibold">
            Essential Tips for Creating Eye-Catching T-shirts
          </p>
          <p className="font-light text-xs lg:text-lg m-2">
            Discover the essential tips and techniques you need to master the art of
            creating eye-catching T-shirt designs.
          </p>
          <div className="inline-flex md:mb-6 mt-4 ">
            <img src={ceo} alt="ceo image" className="w-auto ml-4" />
            <div className="flex flex-col m-6">
              <p className="font-bold text-white">AMAN JAIMAN</p>
              <p className="font-light text-slate-100">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center">
        <p className="text-slate-100 font-semibold text-2xl lg:text-4xl m-4 mb-14 grid justify-center items-center">
          Our Articles
        </p>
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2  w-9/12">
            {blogCard}
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

export default Blog;
