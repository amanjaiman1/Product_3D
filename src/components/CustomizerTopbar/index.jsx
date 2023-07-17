import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import Avatar from "./../Avatar";

function CustomizerTopbar() {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const imageRedirect = () => {
    navigate("/app/customizer/profile");
  };

  const user = {
    email: localStorage.getItem("email"),
    profilePic: localStorage.getItem("photoURL"),
    displayName: localStorage.getItem("displayName"),
  };
  // console.log(user);

  return (
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
          Welcome, {user.displayName ? user.displayName : "XXXX"}
        </span>
        <Avatar
          user={user}
          className={"hover:bg-pink-500 w-10 h-10"}
          onClick={() => navigate("/app/customizer/profile")}
        />
        <span></span>
      </div>
    </div>
  );
}

export default CustomizerTopbar;
