import React from "react";
import CustomizerViewer from "../../components/CustomizerViewer";
import CustomizerSettings from "../../components/CustomizerSettings";
import CustomizerNavBar from "../../components/CustomizerNavBar";

function CustomizerContainer() {
  return (
    <div className="h-screen flex justify-center items-center relative">
      <div className="absolute top-0 right-12 mt-3">
        <CustomizerNavBar />
      </div>
      <div
        className={`flex-[0.3] bg-primary h-full flex items-center bg-fixed  bg-no-repeat bg-[center_left_2rem] bg-hero-pattern`}
      >
        <CustomizerViewer />
      </div>
      <div className="flex-1">
        <CustomizerSettings />
      </div>
    </div>
  );
}

export default CustomizerContainer;
