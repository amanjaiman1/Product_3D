import React, { useState } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";

function CustomizerSidebar() {
  const { pathname } = useLocation();
  const selectedvalue = "bg-gray-600";
  const navigate = useNavigate();
  return (
    <div className="p-4 shadow-lg bg-[#09090C]">
      <div
        onClick={() => {
          navigate("/app/customizer");
        }}
        className={`cursor-pointer  mt-4 p-3 text-white  ${
          "/app/customizer" === pathname ? selectedvalue : "hover:bg-gray-600"
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
            : "hover:bg-gray-600"
        }`}
      >
        Favourite
      </div>

      <div
        onClick={() => {
          navigate("/app/customizer/community");
        }}
        className={`cursor-pointer  mt-4 p-3 text-white  ${
          "/app/customizer/community" === pathname
            ? selectedvalue
            : "hover:bg-gray-600"
        }`}
      >
        Community
      </div>

      <div
        onClick={() => {
          navigate("/app/customizer/create-post");
        }}
        className={`cursor-pointer  mt-4 p-3 text-white  ${
          "/app/customizer/create-post" === pathname
            ? selectedvalue
            : "hover:bg-gray-600"
        }`}
      >
        Create Blog
      </div>
      <div
        onClick={() => {
          navigate("/app/customizer/plugins");
        }}
        className={`cursor-pointer  mt-4 p-3 text-white  ${
          "/app/customizer/plugins" === pathname
            ? selectedvalue
            : "hover:bg-gray-600"
        }`}
      >
        Plugins
      </div>
      <div
        onClick={() => {
          navigate("/app/customizer/teams");
        }}
        className={`cursor-pointer  mt-4 p-3 text-white  ${
          "/app/customizer/teams" === pathname ? selectedvalue : "hover:bg-gray-600"
        }`}
      >
        Teams
      </div>
      <div
        onClick={() => {
          navigate("/app/customizer/settings");
        }}
        className={`cursor-pointer  mt-4 p-3 text-white  ${
          "/app/customizer/settings" === pathname
            ? selectedvalue
            : "hover:bg-gray-600"
        }`}
      >
        Settings
      </div>
    </div>
  );
}

export default CustomizerSidebar;
