import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../index.css';  

function Contributor( ) {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(15);

  useEffect(() => {
    axios
      .get('https://api.github.com/repos/amanjaiman1/Product_3D/contributors')
      .then((response) => {
        setContributors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = contributors.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  

  return (
    <div className="flex flex-col items-center min-h-screen  overflow-hidden">
      <div className="mt-5  bg-[#E9EDFF] rounded-lg w-90 pl-5 pr-5 py-2">
        <h1 className="text-center text-[#293FCC] text-base backdrop-brightness-20">Contributors</h1>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-center mt-[-5px] backdrop-brightness-125 justify-center">Meet Our Talented Team</h2>
        <p className="text-center mt-5 text-lg pt-6">
          Our project's success is attributed to the dedicated contributors who brought
          expertise and creativity. Meet the amazing individuals behind our accomplishments.
        </p>
      </div>
      <div className="flex flex-wrap justify-center p-6 gap-8 max-w-screen-sm max-h-screen-md lg:max-w-full lg:max-h-full">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {currentUsers.map((contributor, index) => (
              <div
                key={contributor.id}
                className={`flex flex-col items-center space-y-4 text-center  ${
                  index % 10 >= 8 ? 'ml-8' : ''
                }`}
              >
                <a
                  rel="noopener noreferrer"
                  href={`https://github.com/${contributor.login}`}
                  aria-label="GitHub"
                  className="p-2 rounded-md hover:text-violet-400"
                >
                  <img
                    src={contributor.avatar_url}
                    alt=""
                    className="w-32 h-32 mx-auto rounded-full"
                  />
                </a>
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold text-violet">{contributor.login}</h2>
                  <p className="text-xs">{`Contributions: ${contributor.contributions}`}</p>
                </div>
              </div>
            ))}
            {currentUsers.length === 0 && <p>No contributors found.</p>}
          </>
        )}
      </div>
      {contributors.length > 0 && (
        <div className="">
          <ul className={`flex justify-center space-x-4 `}>
            {Array.from(
              { length: Math.ceil(contributors.length / usersPerPage) },
              (_, index) => (
                <li
                  key={index}
                  className={`cursor-pointer ${currentPage === index + 1 ? 'font-bold' : ''}`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Contributor;
