import React from "react";
import { truncate } from "../../utils/utils";
import state from "../CustomizerViewer/valito";
import { useNavigate } from "react-router";

function RecentDesignCard({ data }) {
  const navigate = useNavigate();
  let { title, lastUpdate } = data;
  if (title == undefined) {
    title = "Untitled design";
  }
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
      className="w-[200px] h-[200px] cursor-pointer  my-3 p-2 rounded"
    >
      <div className="text-5xl bg-pink-600 h-[150px] rounded-lg hover:bg-pink-500 flex justify-center items-center text-white">
        {title.slice(0, 1).toUpperCase()}
      </div>
      <div className="p-2">
        <p title={title && title}>{truncate(title && title, 20)}</p>
        <p className="text-secondary text-sm">
          Last Edit {lastUpdate && new Date(lastUpdate).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default RecentDesignCard;
