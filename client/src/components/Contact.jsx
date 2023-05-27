import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Contact() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(13);

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

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setUsersPerPage(9); // Large screens
    } else if (window.innerWidth >= 820) {
      setUsersPerPage(9); // 820x1180 screen size
    } else if (window.innerWidth >= 740) {
      setUsersPerPage(9); // 768x1024 screen size

    } else if (window.innerWidth >= 576) {
      setUsersPerPage(10); // Medium screens
    } else {
      setUsersPerPage(6); // Small screens
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = contributors.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="contact-container">
      <h1 className="text-center text-very-dark-desaturated-blue text-3xl leading-8 font-bold text-shadow-md mb-3 mt-3">
        Our Valuable Contributors
      </h1>

      <div className="flex flex-wrap justify-center p-6 gap-4 shadow-md rounded-xl sm:p-12 dark:bg-gray-900 dark:text-gray-100 ml-2">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {currentUsers.map((contributor) => (
              <div
                key={contributor.id}
                className="flex flex-col items-center space-y-4 text-center divide-y divide-gray-700"
              >
                {/* Avatar */}
                <a
                  rel="noopener noreferrer"
                  href={`https://github.com/${contributor.login}`}
                  aria-label="GitHub"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <img
                    src={contributor.avatar_url}
                    alt=""
                    className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                  />
                </a>
                {/* Contributor Info */}
                <div className="my-2 space-y-1">
                  <h2 className="text-xl font-semibold sm:text-2xl">{contributor.login}</h2>
                  <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                    {`Contributions: ${contributor.contributions}`}
                  </p>
                </div>
                {/* Additional Content */}
                <div className="flex justify-center pt-2 space-x-4 align-center">
                  {/* Add any additional content or buttons here */}
                </div>
              </div>
            ))}
            {currentUsers.length === 0 && <p>No contributors found.</p>}
          </>
        )}
      </div>

      <div className="pagination">
        {contributors.length > 0 && (
          <ul className="flex justify-center space-x-4 mt--10 mb-9">
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
        )}
      </div>
    </div>
  );
}

export default Contact;
