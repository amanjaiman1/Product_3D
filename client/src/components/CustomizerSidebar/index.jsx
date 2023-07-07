import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomizerSidebar() {
  const [isActive, setisActive] = useState(false);
  const selectedvalue = "bg-blue-700";
  const navigate = useNavigate();
  return (
    <div className="p-4 shadow-lg bg-primary min-[320px]:w-[112px] sm:w-[100%]">
      <div
        onClick={() => {
          setisActive((prev) => !prev);
          navigate("/app/customizer");
        }}
        className={`cursor-pointer  mt-4 p-3 text-white text-center ${
          isActive ? "" : selectedvalue
        }`}
      >
        Recent Designs
      </div>
      <div
        onClick={() => setisActive((prev) => !prev)}
        className={`cursor-pointer  mt-4 p-3 text-white text-center ${
          isActive ? selectedvalue : "hover:bg-blue-700"
        }`}
      >
        Favourite
      </div>
    </div>
  );
}

export default CustomizerSidebar;
