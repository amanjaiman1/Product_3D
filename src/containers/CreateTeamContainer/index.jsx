import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { db } from "../../firebase/firebase";
import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";

function CreateTeamContainer() {
  const [teams, setTeams] = useState([]);
  const [name, setName] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const getData = async () => {
    let td = [];
    let data = await await getDocs(collection(db, "teams"));
    data.forEach((item) => td.push(item.data()));
    setTeams(td);
  };
  useEffect(() => {
    getData();
  }, [isLoading]);
  const handleCreate = async () => {
    setisLoading(true);
    const userInfo = JSON.parse(await localStorage.getItem("userInfo"));
    console.log(userInfo);
    const dbRef = doc(db, "teams", userInfo.email);
    await updateDoc(dbRef, {
      title: name,
      isJoined: false,
    });
    setisLoading(false);
  };
  return (
    <div className="p-5">
      <div className="space-x-3 w-full">
        <input
          onChange={(event) => setName(event.target.value)}
          className="rounded-full border-2 p-2 border-secondary w-9/12"
          placeholder="Enter team name"
        />
        <Button
          onClick={handleCreate}
          className={
            "bg-primary text-white hover:bg-blue-600 hover:text-white w-2/12"
          }
        >
          Create New Team
        </Button>
      </div>
      <div className="flex">
        {teams?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col rounded justify-center w-48 h-48 m-3 items-center border-2 text-white border-gray-600"
          >
            {item?.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTeamContainer;
