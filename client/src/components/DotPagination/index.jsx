import React, { useEffect } from "react";

function Dot({ paginate, index, currentPage }) {
  const handlePage = () => {
    paginate(index + 1);
  };
  return (
    <div
      onClick={handlePage}
      className={` cursor-pointer w-5 h-5  rounded-full border-2 shadow ${
        index + 1 == currentPage ? "bg-primary" : "bg-gray-300"
      }`}
    ></div>
  );
}

function DotPagination({ data, perPage, currentPage, paginate }) {
  return (
    <div className="flex justify-center">
      {Array.from({ length: Math.ceil(data.length / perPage) }, (_, index) => {
        return (
          <Dot
            key={index}
            index={index}
            paginate={paginate}
            currentPage={currentPage}
          />
        );
      })}
    </div>
  );
}

export default DotPagination;
