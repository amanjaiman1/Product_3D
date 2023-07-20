import React, { useEffect, useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import Avatar from "./../Avatar";

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
  const imageRedirect = () => {
    navigate("/app/customizer/profile");
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
    <div className="shadow m-3 p-3 flex justify-between  items-center sticky top-0 z-100 backdrop-filter backdrop-blur-lg">
      <div>Recents</div>
      <div className="flex space-x-2 items-center">
        <Button
          onClick={() => {
            navigate("/app/customizer/editor");
          }}
        >
          Design New T-shirt
        </Button>
        <Button className={"bg-pink-600 hover:bg-pink-500"}>Import</Button>
        <Button className={"bg-violet-600 hover:bg-violet-500"} onClick={Logout}>
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
