import React from "react";
import CustomizerDesignCard from "../CustomizerDesignCard";
import { useState } from "react";
import dummyDesign from "../../data/dummyDesign";
import { useEffect } from "react";
import DotPagination from "../DotPagination";
function CustomizerDesign() {
  const [designs, setDesigns] = useState(dummyDesign);
  const [currentPage, setcurrentPage] = useState(1);
  const [designPerPage, setDesignPerPage] = useState(8);
  const indexOfLastDesign = currentPage * designPerPage;
  const indexOfFirstDesign = indexOfLastDesign - designPerPage;
  const [selectedDesign, setSelectedDesign] = useState(null);
  const page = designs.slice(indexOfFirstDesign, indexOfLastDesign);
  const paginate = (page) => {
    setcurrentPage(page);
  };
  useEffect(() => {}, [currentPage]);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-evenly flex-wrap h-full ">
        {page?.map((item, index) => {
          return (
            <CustomizerDesignCard
              setSelectedDesign={setSelectedDesign}
              index={index}
              currentIndex={selectedDesign}
              key={index}
              name={item?.name}
              imgUrl={item?.img}
            />
          );
        })}
      </div>
      <div className="flex flex-row absolute bottom-10">
        <DotPagination
          data={dummyDesign}
          paginate={paginate}
          perPage={designPerPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default CustomizerDesign;
