import React from "react";
import { truncate } from "../../utils/utils";

function RecentDesignCard({ data }) {
  const { title, lastEdit } = data;
  return (
    <div className="w-[200px] h-[200px] cursor-pointer  my-3 p-2 rounded">
      <div className="bg-gray-600 h-[150px] rounded-lg hover:bg-slate-500"></div>
      <div className="p-2">
        <p title={title && title}>{truncate(title && title, 20)}</p>
        <p className="text-secondary text-sm">Last Edit {lastEdit && lastEdit}</p>
      </div>
    </div>
  );
}

export default RecentDesignCard;
