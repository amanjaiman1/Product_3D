import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import PluginCard from "../../components/PluginCard";

function PluginsContainer() {
  const [searchTxt, setSearchTxt] = useState("");
  const data = [
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
  const [plugins, setPlugins] = useState([]);
  useEffect(() => {
    if (searchTxt == "") {
      setPlugins(data);
    }
  }, [searchTxt]);
  const handleSearch = () => {
    var temp = plugins.filter((item) => {
      return item.title.includes(searchTxt);
    });
    setPlugins((prev) => temp);
  };
  return (
    <div className="p-5">
      <div className="w-full flex justify-between space-x-2">
        <input
          onChange={(event) => setSearchTxt(event.target.value)}
          className="p-2 w-11/12 border-2 border-solid border-secondary rounded-full"
          type="text"
          placeholder="Search Plugins"
        />
        <Button
          onClick={handleSearch}
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
