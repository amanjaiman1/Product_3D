import React, { useEffect, useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import Avatar from "./../Avatar";
import { generateUUID } from "three/src/math/MathUtils";
import { deserializeFromP3D } from "../../utils/utils";
import { db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
function CustomizerTopbar() {
  const [userInfo, setuserInfo] = useState({
    loading: true,
    data: {},
  });
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const handleImport = (event) => {
    try {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = async (e) => {
        var deserializedData = await deserializeFromP3D(e.target.result);
        delete deserializedData.id;
        delete deserializedData.uid;

        const { uid } = JSON.parse(await localStorage.getItem("userInfo"));
        console.log(uid);
        const docRef = doc(db, "designs", generateUUID());
        await setDoc(docRef, {
          uid: uid,
          ...deserializedData,
          lastUpdate: new Date().toUTCString(),
        });
        window.location.reload();
      };
      reader.readAsText(file);
    } catch (error) {}
  };
  useEffect(() => {
    async function getUserInfo() {
      let localUser = await JSON.parse(localStorage.getItem("userInfo"));
      setuserInfo((prev) => {
        return { data: localUser, loading: false };
      });
    }
    getUserInfo();
  }, []);
  // console.log(user);

  return userInfo?.data?.loading ? (
    <h1>Loading..</h1>
  ) : (
    <div className="shadow m-3 p-3 flex justify-between  items-center sticky top-0 z-100 backdrop-filter backdrop-blur-lg bg-[#09090C] text-white">
      <div>Recents</div>
      <div className="flex space-x-2 items-center">
        <Button
          className={"bg-[#09090C] hover:bg-gray-700 text-white hover:text-white"}
          onClick={() => {
            let uuid = generateUUID();
            navigate("/app/customizer/editor/" + uuid);
          }}
        >
          Design New T-shirt
        </Button>
        <label
          htmlFor="importfile"
          className="bg-pink-500 p-2 rounded-full px-5 hover:bg-pink-400 cursor-pointer text-white rounded-full"
        >
          Import
          <input
            id="importfile"
            onChange={handleImport}
            hidden
            type="file"
            className={"bg-pink-600 hover:bg-pink-500"}
          />
        </label>
        <Button
          className={"bg-violet-600 hover:text-white hover:bg-violet-500 text-white"}
          onClick={Logout}
        >
          Logout
        </Button>
        <span className="ml-2">
          Welcome,{" "}
          {userInfo?.data?.fullName ? userInfo?.data?.fullName : "Guest User"}
        </span>
        <Avatar
          user={userInfo?.data}
          className={"hover:bg-pink-500 w-10 h-10"}
          onClick={() => navigate("/app/customizer/profile")}
        />
        <span></span>
      </div>
    </div>
  );
}

export default CustomizerTopbar;
