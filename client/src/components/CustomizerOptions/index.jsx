import React, { useEffect, useState } from "react";
import zoomInIcon from "../../assets/svg/zoomin.svg";
import zoomOutIcon from "../../assets/svg/zoomout.svg";
import rotateX from "../../assets/svg/roatate-x.svg";
import rotateY from "../../assets/svg/rotate-y.svg";
import ToolTip from "../CustomizerToolTip";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

function CustomizerOptions({ camerRef, cameraState }) {
  const [cState, setCState] = cameraState;
  const [selectedOption, setselectedOption] = useState(0);
  const handleZoomIn = () => {
    setCState((prevState) => {
      let zoom = prevState.zoom-- / 10;
      if (zoom < 1.8) return { ...prevState, zoom: 1.8 };
      return { ...prevState, zoom: zoom };
    });
  };
  const handleZoomOut = () => {
    setCState((prevState) => {
      let zoom = prevState.zoom++;
      if (zoom > 7) return { ...prevState, zoom: 7 };
      return { ...prevState, zoom: zoom };
    });
  };
  return (
    <div
      className="fixed
      flex
      justify-between items-center
      h-16 border-2 border-solid 
      border-black-500  bottom-10 left-[150px]
    bg-white rounded-full shadow
      p-4"
    >
      <div
        onClick={handleZoomIn}
        className="hover:bg-slate-200 cursor-pointer w-16 h-10 border-r-2 border-r-solid border-r-gray-400 relative "
      >
        <img src={zoomInIcon} alt="" />
        <ToolTip
          index={1}
          current={selectedOption}
          setselectedOption={setselectedOption}
          title={"Zoom In"}
          shortCut={"Ctrl +"}
        />
      </div>
      <div
        onClick={handleZoomOut}
        className="hover:bg-slate-200 cursor-pointer w-16 h-10 pl-3 relative"
      >
        <img src={zoomOutIcon} alt="" />
        <ToolTip
          index={1}
          current={selectedOption}
          setselectedOption={setselectedOption}
          title={"Zoom In"}
          shortCut={"Ctrl +"}
        />
      </div>
    </div>
  );
}

export default CustomizerOptions;
