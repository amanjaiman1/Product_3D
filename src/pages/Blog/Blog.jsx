import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/image/searchIcon.webp";
import Card from "../../components/BlogCard/bcard";
import NewsLetter from "../../containers/NewsLetter";
import { Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
function Blog() {
  const [blogData, setBlogData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogCollection = collection(db, "blogPost");
        const q = query(blogCollection, where("isDelete", "==", false));

        const querySnapshot = await getDocs(q);

        const blogDataList = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBlogData(blogDataList);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  const filteredBlogData = blogData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const blogCard = filteredBlogData.map((item) => {
    return <Card key={item.id} setBlog={setBlogData} data={item} />;
  });

  return (
    <div>
      <div className="main relative">
        <div className="overlay absolute top-0 left-0 w-full h-150 bg-black opacity-40"></div>
        <video
          className="w-full h-full object-cover"
          src="https://drive.google.com/uc?id=1fMnRzaocAEcRZ7nCzObKu44MXtChjD-P"
          autoPlay
          loop
          muted
        />
        <div className="content absolute top-0 w-full h-full flex flex-col justify-center items-center text-white">
          <div className="mb-[20%]">
            <div className="grid justify-center text-white p-6 text-center pt-5">
              <p className="text-lg md:text-xl lg:text-4xl text-purple-400 ">
                Our Blog
              </p>
              <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                Resources and Insights
              </p>
              <p className="text-sm md:text-lg lg:text-xl mt-4 font-thin">
                The latest industry news, interviews, technologies, and resources.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="inline-flex bg-white shadow-md shadow-slate-600 rounded-xl w-[70%]">
                <img
                  src={searchIcon}
                  alt="search icon"
                  className="p-3 w-12 lg:w-16"
                />
                <input
                  className="w-[50vw] lg:w-[40vw] lg:h-16 rounded-xl p-2 outline-none text-black"
                  label="Search"
                  placeholder="Search for articles"
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="items-center mt-10">
        <p className="text-slate-100 font-semibold text-2xl lg:text-4xl m-4 mb-10 grid justify-center items-center">
          Valuable Posts
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
