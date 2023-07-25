import React, { useEffect, useState } from "react";
import CustomizerViewer from "../../components/CustomizerViewer";
import CustomizerSettings from "../../components/CustomizerSettings";
import CustomizerNavBar from "../../components/CustomizerNavBar";
import CustomizerTitle from "../../components/CustomizerTitle";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

function CustomizerContainer() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center relative">
      <div className="absolute top-0 left-5 flex justify-between items-center w-[500px]">
        <div>
          <Button
            onClick={() => {
              navigate("/app/customizer");
            }}
            className={
              "bg-white text-primary hover:bg-blue-600 hover:text-white rounded-full"
            }
          >
            Go Back
          </Button>
        </div>
        <CustomizerTitle />
      </div>
      <div className="absolute top-0 right-12 mt-3">
        <CustomizerNavBar />
      </div>
      <div
        className={`flex-[.8] bg-primary h-full flex items-center bg-fixed justify-center bg-no-repeat bg-[center_left_2rem] bg-hero-pattern`}
      >
        <CustomizerViewer />
      </div>
      <div className="flex-1 m-5">
        <CustomizerSettings />
      </div>
    </div>
  );
}

export default CustomizerContainer;
