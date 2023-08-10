import React from "react";
import Button from "../Button";

function PluginCard({ data }) {
  const { title, isInstalled } = data;
  return (
    <div className="w-48 h-48 flex border-gray-600 border-2 m-3 flex-col rounded justify-between p-10 items-center text-white">
      {title}
      {isInstalled && (
        <Button
          className={"bg-primary text-white hover:bg-blue-700 hover:text-white"}
        >
          Uninstall
        </Button>
      )}
      {!isInstalled && (
        <Button
          className={"bg-primary text-white hover:bg-blue-700 hover:text-white"}
        >
          Install
        </Button>
      )}
    </div>
  );
}

export default PluginCard;
