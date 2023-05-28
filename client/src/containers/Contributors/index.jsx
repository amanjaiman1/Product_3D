import React, { useEffect, useState } from "react";
import axios from "axios";
import ContributorCard from "../../components/ContributorCard";
import Pagination from "../../components/Pagination";

function Contributor() {

  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(15);
  
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = contributors.slice(indexOfFirstUser, indexOfLastUser);
  
  useEffect(() => {
    axios
      .get("https://api.github.com/repos/amanjaiman1/Product_3D/contributors")
      .then((response) => {
        setContributors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col items-center min-h-screen  overflow-hidden">
      <div className="mt-5  bg-primary bg-opacity-10 font-semibold rounded-lg pl-5 pr-5 py-2">
        <h1 className="text-center text-primary">Contributors</h1>
      </div>
      <div className="my-5">
        <h2 className="text-3xl font-bold text-center justify-center">
          Meet Our Talented Team
        </h2>
        <p className="text-center text-secondary mt-5  text-lg lg:px-60">
          Our project's success is attributed to the dedicated contributors who
          brought expertise and creativity. Meet the amazing individuals behind
          our accomplishments.
        </p>
      </div>
      <div className="flex flex-wrap justify-center p-6 gap-8 max-w-screen-sm max-h-screen-md lg:max-w-full lg:max-h-full">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {currentUsers.map((contributor, index) => (
              <ContributorCard key={index} index={index} contributor={contributor} />
            ))}
            {currentUsers.length === 0 && <p>No contributors found.</p>}
          </>
        )}
      </div>
      {contributors.length > 0 && (
        <Pagination
          data={contributors}
          paginate={paginate}
          perPage={usersPerPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default Contributor;
