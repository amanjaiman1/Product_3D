import React from "react";
import Button from "../../components/Button";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TeamContainer() {
  const [searchTxt, setSearchTxt] = useState("");
  const navigate = useNavigate();
  const data = [
    {
      title: "Team A",
      isJoined: false,
    },
    {
      title: "Team B",
      isJoined: true,
    },
    {
      title: "Team C",
      isJoined: true,
    },
  ];
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    if (searchTxt == "") {
      setTeams(data);
    }
  }, [searchTxt]);
  const handleSearch = () => {
    var temp = teams.filter((item) => {
      return item.title.includes(searchTxt);
    });
    setTeams((prev) => temp);
  };
  return (
    <div className="p-5">
      <div className="w-full flex justify-between space-x-2">
        <input
          onChange={(event) => setSearchTxt(event.target.value)}
          className="p-2 w-11/12 border-2 border-solid border-secondary rounded-full"
          type="text"
          placeholder="Search Teams"
        />
        <Button
          onClick={handleSearch}
          className={
            "bg-primary text-white hover:bg-blue-900 hover:text-white w-1/12 p-3"
          }
        >
          Search
        </Button>
        <Button
          onClick={() => navigate("/app/customizer/teams/create")}
          className={
            "bg-primary text-white hover:bg-blue-900 hover:text-white w-1/12 p-3"
          }
        >
          Create
        </Button>
      </div>
      <div className="container flex flex-wrap">
        {teams.map((item) => (
          <div className="flex flex-col rounded justify-center w-48 h-48 m-3 items-center border-2 border-gray-600 text-white">
            {item.title}
            {item.isJoined && (
              <Button
                className={
                  " text-white bg-secondary hover:bg-secondary hover:text-white"
                }
              >
                Joined
              </Button>
            )}
            {!item.isJoined && (
              <Button
                className={
                  "bg-primary text-white hover:bg-blue-700 hover:text-white"
                }
              >
                Join
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamContainer;
