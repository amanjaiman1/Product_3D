import React from "react";

function Pagination({ data, perPage, currentPage, paginate }) {
  return (
    <>
      <ul className={`flex justify-center space-x-4 `}>
        {Array.from({ length: Math.ceil(data.length / perPage) }, (_, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              currentPage === index + 1 ? "font-bold" : ""
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Pagination;
