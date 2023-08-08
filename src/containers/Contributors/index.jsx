import React, { useEffect, useState } from "react";
import axios from "axios";
import ContributorCard from "../../components/ContributorCard";
import Pagination from "../../components/Pagination";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/motion";
import { imgAnim } from "../../animation/motion";
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
      <motion.div
        variants={imgAnim}
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        whileInView={{
          scale: [0, 1],
          opacity: 1,
        }}
        transition={{ duration: 0.84, delay: 0.1 }}
        className="mt-5 font-semibold rounded-lg pl-5 pr-5 py-2"
      >
        <h1 className="text-center deepshadow ">Contributors</h1>
      </motion.div>

      <div className="my-5 wrappers">
        <hr className="hr-text" />
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25, once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-[70px] text-white font-bold text-center justify-center"
        >
          <h1 data-heading="Meet Our Talented Team">Meet Our Talented Team</h1>
        </motion.h2>
        <motion.p
          variants={fadeIn}
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 0.2, delay: 0.45 }}
          viewport={{ amount: 0.25, once: true }}
          className="text-center text-[#D8BFD8] mt-5  text-lg lg:px-60"
        >
          Our project's success is attributed to the dedicated contributors who
          brought expertise and creativity. Meet the amazing individuals behind our
          accomplishments.
        </motion.p>
      </div>
      <div className="flex flex-wrap justify-center p-6 gap-8 max-w-screen-sm max-h-screen-md lg:max-w-full lg:max-h-full ">
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
