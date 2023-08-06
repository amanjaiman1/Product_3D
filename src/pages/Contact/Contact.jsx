import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Contact.css";
import { HashLoader } from "react-spinners";
import { FaGithub } from "react-icons/fa";
import verify from "../../assets/verification.png";

function Contact() {
  const [contributors, setContributors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(18);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/amanjaiman1/Product_3D/contributors"
        );
        const contributorsData = response.data;
        const updatedContributors = await Promise.all(
          contributorsData.map(async (contributor) => {
            try {
              const contributorResponse = await axios.get(contributor.url);
              const { name, bio, location } = contributorResponse.data;
              return { ...contributor, name, bio, location };
            } catch (error) {
              console.log(`Error fetching contributor details: ${error}`);
              return contributor;
            }
          })
        );
        setContributors(updatedContributors);
        setLoading(false);
      } catch (error) {
        console.log(`Error fetching contributors: ${error}`);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = contributors.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter users based on search query
  const filteredUsers = currentUsers.filter((user) => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const lowerCaseLogin = user.login.toLowerCase();
    const lowerCaseName = user.name ? user.name.toLowerCase() : "";

    return (
      lowerCaseLogin.includes(lowerCaseSearchQuery) ||
      lowerCaseName.includes(lowerCaseSearchQuery)
    );
  });

  return (
    <div className="contact-container mt-[65px]">
      <div className="my-9">
        <h2 className="text-3xl text-white font-bold text-center justify-center">
          Meet Our Talented Team
        </h2>
        <p className="text-center text-secondary mt-5  text-lg lg:px-60">
          Our project's success is attributed to the dedicated contributors who
          brought expertise and creativity. Meet the amazing individuals behind our
          accomplishments.
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <input
          className="w-80 h-12 px-4 py-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border border-gray-300 text-gray-700 placeholder-gray-400 text-sm"
          type="text"
          placeholder="Search by username and Name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {loading ? (
        <div className="flex justify-center mt-10">
          <HashLoader color="#484066" aria-label="grid-loading" visible={"true"} />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center p-6 gap-4 rounded-xl sm:p-12 dark:text-gray-100 ml-2">
          {filteredUsers.map((contributor) => (
            <div key={contributor.id} className="card card1">
              <div className="contributor-content card-flip side">
                <div className="back back-background">
                  <div className="back-content">
                    <div className="front-content">
                      <div className="title mt-2">
                        <p className="title">
                          <strong>{contributor.login}</strong>
                        </p>
                      </div>
                      {contributor.bio === null ? (
                        <p className="card-footer mx-8 mb-3">
                          <span className="text-[15px] font-bold text-white">
                            BIO :
                          </span>{" "}
                          <span className="text-[12px] text-white text-justify">
                            Not Available
                          </span>
                        </p>
                      ) : (
                        <p className="card-footer mx-8  mb-3">
                          <span className=" text-[15px] font-bold text-white">
                            BIO :
                          </span>{" "}
                          <span className="text-[12px] text-white text-justify">
                            {contributor.bio}
                          </span>
                        </p>
                      )}

                      {contributor.location === null ? (
                        <p className="card-footer">
                          <span className="text-[15px] font-bold text-white">
                            LOCATION :
                          </span>{" "}
                          <span className="text-[12px] text-white text-justify">
                            Not Available
                          </span>
                        </p>
                      ) : (
                        <p className="card-footer">
                          <span className=" text-[15px] font-bold text-white">
                            LOCATION :
                          </span>{" "}
                          <span className="text-[12px] text-white text-justify">
                            {contributor.location}
                          </span>
                        </p>
                      )}
                    </div>

                    {/* Github icon */}
                    <div
                      className="text-white"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        window.open(`https://github.com/${contributor?.login}`)
                      }
                    >
                      <div className="mx-5 xsm:mx-2">
                        <a
                          href={contributor.gitHub}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer inline-flex h-10 items-center rounded-lg  font-extrabold text-[1.5rem]"
                          aria-label="Github"
                        >
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="front front-img">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>
                  <img
                    src={contributor.avatar_url}
                    className="rounded-full w-40 h-40 mx-auto mb-3"
                    alt=""
                  />
                  <strong className="text-white font-bold">
                    <img src={verify} alt="" className="w-4 h-4 inline-block mr-1" />
                    {contributor.name ? contributor.name : contributor.login}
                  </strong>

                  <div className="text-white text-xs mt-2">
                    <h4>{contributor.location}</h4>
                    <h4>Contributions : {contributor.contributions}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {contributors.length === 0 && <p>No contributors found.</p>}
        </div>
      )}

      <div className="pagination text-white">
        {contributors.length > 0 && (
          <ul className="flex justify-center space-x-4 mt--10 mb-9">
            {Array.from(
              { length: Math.ceil(contributors.length / usersPerPage) },
              (_, index) => (
                <li
                  key={index}
                  className={`cursor-pointer ${
                    currentPage === index + 1 ? "font-bold" : ""
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Contact;
