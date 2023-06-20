import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/user";
import Button from "../components/Button";

function Test() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const handleSubmit = () => {
    let data = {
      isLoggedIn: true,
      userData: {
        email: "balaji@example.com",
        name: "balaji",
      },
    };
    dispatch(updateUser(data));
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div>
        <h1>Email:{userState?.userData?.email}</h1>
      </div>
      <div>
        <h1>Name:{userState?.userData?.name}</h1>
      </div>
      <Button onClick={() => handleSubmit()}>Update State</Button>
    </div>
  );
}

export default Test;
