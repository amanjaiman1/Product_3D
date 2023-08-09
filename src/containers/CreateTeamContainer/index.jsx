import React from "react";
import FormGroup from "../../components/FormGroup";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

function CreateTeamContainer() {
  const teams = [
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
  return (
    <div className="p-5">
      <div className="space-x-3 w-full">
        <input
          className="rounded-full border-2 p-2 border-secondary w-9/12"
          placeholder="Enter team name"
        />
        <Button
          className={
            "bg-primary text-white hover:bg-blue-600 hover:text-white w-2/12"
          }
        >
          Create New Team
        </Button>
      </div>
      <div className="flex">
        {teams.map((item) => (
          <div className="flex flex-col rounded justify-center w-48 h-48 m-3 items-center border-2 border-gray-600">
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTeamContainer;
