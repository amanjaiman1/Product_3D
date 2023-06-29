import React, { useState } from "react";

function CustomizerSidebar() {
  const [isActive, setisActive] = useState(false);
  const selectedvalue = "bg-blue-700";
  return (
    <div className="p-4 shadow-lg bg-primary">
      <div
        onClick={() => setisActive((prev) => !prev)}
        className={`cursor-pointer  mt-4 p-3 text-white  ${
          isActive ? "" : selectedvalue
        }`}
      >
        Recent Designs
      </div>
      <div
        onClick={() => setisActive((prev) => !prev)}
        className={`cursor-pointer  mt-4 p-3 text-white  ${
          isActive ? selectedvalue : "hover:bg-blue-700"
        }`}
      >
        Favourite
      </div>
    </div>
  );
}

export default CustomizerSidebar;
