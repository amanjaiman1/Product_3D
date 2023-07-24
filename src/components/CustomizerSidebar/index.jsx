import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function CustomizerSidebar() {
  const { pathname } = useLocation();
  const selectedvalue = "bg-blue-700";
  const navigate = useNavigate();
  return (
    <div className="p-4 shadow-lg bg-primary">
      <div
        onClick={() => {
          navigate("/app/customizer");
        }}
        className={`cursor-pointer  mt-4 p-3 text-white  ${
          "/app/customizer" === pathname ? selectedvalue : "hover:bg-blue-700"
        }`}
      >
        Recent Designs
      </div>
      <div
        onClick={() => {
          navigate("/app/customizer/favourite");
        }}
        className={`cursor-pointer  mt-4 p-3 text-white  ${
          "/app/customizer/favourite" === pathname
            ? selectedvalue
            : "hover:bg-blue-700"
        }`}
      >
        Favourite
      </div>
    </div>
  );
}

export default CustomizerSidebar;
