import React, { useEffect, useState } from "react";
import TextField from "./../../components/TextField";
import FormGroup from "../../components/FormGroup";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import PopupModel from "../../components/PopupModel";
import ProfileEditor from "../ProfileEditor";
function ProfileContainer() {
  const [isVisible, setIsVisible] = useState(false);
  const [userInfo, setuserInfo] = useState({
    loading: true,
    data: {},
  });
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

  return userInfo.loading ? (
    <h1>Loading..</h1>
  ) : (
    <div className="flex flex-col p-10">
      <div className="flex justify-center items-center">
        <Avatar user={userInfo?.data} className={"w-28 h-28"} />
      </div>
      <div className="flex flex-col space-y-3 mt-5">
        <FormGroup title={"Name"}>
          <h1 className="text-secondary">{userInfo?.data?.fullName}</h1>
        </FormGroup>
        <FormGroup title={"Job"}>
          <h1 className="text-secondary">{userInfo?.data?.job}</h1>
        </FormGroup>
        <FormGroup title={"Email"}>
          <h1 className="text-secondary">{userInfo?.data?.email}</h1>
        </FormGroup>
        <FormGroup title={"Mobile"}>
          <h1 className="text-secondary">{userInfo?.data?.mobile}</h1>
        </FormGroup>
      </div>
      <div className="mt-5">
        <Button
          className={"bg-primary text-white hover:bg-blue-900 hover:text-white"}
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Edit Profile
        </Button>
      </div>
      <PopupModel visible={isVisible} setVisible={setIsVisible}>
        <ProfileEditor />
      </PopupModel>
    </div>
  );
}

export default ProfileContainer;
