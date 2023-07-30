import React from "react";
import state from "../CustomizerViewer/valito";
import { useNavigate } from "react-router-dom";

function CommunityPreviewCard({ data }) {
  console.log("[Community Preview]", data);
  const navigate = useNavigate();
  const handleClick = (event) => {
    Object.keys(data).forEach((key) => {
      if (state[key]) {
        state[key] = data[key];
      }
    });
    navigate("/app/customizer/editor/" + data?.id);
  };
  return (
    <div
      onClick={handleClick}
      className={`w-[200px] h-48 bg-pink-500 text-white hover:bg-pink-600 hover:cursor-pointer m-2 flex flex-col justify-center items-center mb-3 border-2  rounded`}
    >
      <span>{data.title ? data.title : "Untitled"}</span>
    </div>
  );
}

export default CommunityPreviewCard;
