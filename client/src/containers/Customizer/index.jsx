import React from "react";
import customizer from "./../../assets/svg/customizer.svg";
import CustomizerViewer from "../../components/CustomizerViewer";
import CustomizerOptions from "../../components/CustomizerOptions";
import CustomizerSettings from "../../components/CustomizerSettings";

function CustomizerContainer() {
  return (
    <div className="h-screen flex justify-center items-center relative">
      <div
        className={`flex-[0.3] bg-primary h-full flex items-center bg-fixed  bg-no-repeat bg-[center_left_2rem] bg-hero-pattern`}
      >
        <CustomizerViewer />
        <CustomizerOptions />
      </div>
      <div className="flex-1">
        <CustomizerSettings />
      </div>
    </div>
  );
}

export default CustomizerContainer;
