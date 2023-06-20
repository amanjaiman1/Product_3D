import React from "react";

function CustomizerDesignCard({
  imgUrl,
  name,
  currentIndex,
  index,
  setSelectedDesign,
}) {
  const handleSelect = () => {
    console.log("Index");
    setSelectedDesign(index);
  };
  return (
    <div
      onClick={handleSelect}
      className={`w-[180px] flex flex-col justify-center items-center mb-3 border-2 ${
        currentIndex == index ? "border-primary" : ""
      } rounded`}
    >
      <img src={imgUrl} width={100} height={100} alt="" />
      <span>{name}</span>
    </div>
  );
}

export default CustomizerDesignCard;
