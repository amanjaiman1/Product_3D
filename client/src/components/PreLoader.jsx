import React from "react";
import GridLoader from "react-spinners/GridLoader";
import { stylishShirt } from "../assets";
const Loading = () => {
  return (
    <div className=" flex h-screen items-center justify-center ">
      <GridLoader
        color={"#ffb000"}
        size={18}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
export default Loading;
