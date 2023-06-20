import React, { useEffect, useState } from "react"
import axios from "axios"

function Contact() {
  const [contributors, setContributors] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(14)

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/amanjaiman1/Product_3D/contributors")
      .then((response) => {
        setContributors(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = contributors.slice(indexOfFirstUser, indexOfLastUser)

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="contact-container">
      <div className="my-5">
        <h2 className="text-3xl font-bold text-center justify-center">
          Meet Our Talented Team
        </h2>
        <p className="text-center text-secondary mt-5  text-lg lg:px-60">
          Our project's success is attributed to the dedicated contributors who
          brought expertise and creativity. Meet the amazing individuals behind our
          accomplishments.
        </p>
      </div>

      <div className="flex flex-wrap justify-center p-6 gap-4 rounded-xl sm:p-12 dark:text-gray-100 ml-2">
        {currentUsers.map((contributor) => (
          <div
            key={contributor.id}
            style={{ padding: "30px" }}
            className="flex flex-col items-center space-y-4 text-center divide-y divide-gray-700 hover:shadow-lg transition-shadow hover:dark:text-violet-400"
          >
            <img
              src={contributor.avatar_url}
              alt={contributor.login}
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div style={{ border: "none" }} className=" space-y-1">
              <h2 className="text-xl text-[#6058f2] font-semibold sm:text-2xl">
                {contributor.login}
              </h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-400">{`Contributions: ${contributor.contributions}`}</p>
              <button
                className="tryfree-btn justify-center p-2 rounded-md h-10"
                onClick={() =>
                  window.open(`https://github.com/${contributor.login}`)
                }
              >
                Connect
              </button>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              {/* Add any additional content or buttons here */}
            </div>
          </div>
        ))}
        {contributors.length === 0 && <p>No contributors found.</p>}
      </div>
      <div className="pagination">
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
  )
}

export default Contact
