import React from "react";
import Button from "../../components/Button";
import PluginCard from "../../components/PluginCard";

function PluginsContainer() {
  const plugins = [
    {
      title: "AI Tool",
      isInstalled: false,
    },
    {
      title: "T-Shirt",
      isInstalled: true,
    },
    {
      title: "Color Master",
      isInstalled: true,
    },
  ];
  return (
    <div className="p-5">
      <div className="w-full flex justify-between space-x-2">
        <input
          className="p-2 w-11/12 border-2 border-solid border-secondary rounded-full"
          type="text"
          placeholder="Search Plugins"
        />
        <Button
          className={
            "bg-primary text-white hover:bg-blue-900 hover:text-white w-1/12 p-3"
          }
        >
          Search
        </Button>
      </div>
      <div className="container flex  flex-wrap">
        {plugins.map((item, index) => (
          <PluginCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default PluginsContainer;
