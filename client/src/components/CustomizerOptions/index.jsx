import React from "react";
import zoomInIcon from "../../assets/svg/zoomin.svg";
import zoomOutIcon from "../../assets/svg/zoomout.svg";
import rotateX from "../../assets/svg/roatate-x.svg";
import rotateY from "../../assets/svg/rotate-y.svg";

export const ToolTip = ({ title, shortCut }) => {
  return (
    <>
      <div className="bg-white rounded p-3 absolute w-[200px] bottom-[65px] right-[-60px] flex z-10">
        <span className="font-medium">{title}</span> <span className="ml-8 rounded bg-gray-200 shadow-[inset_0_0px_4px_rgba(0,0,0,0.1)]">{shortCut}</span>
      </div>
      <div class="w-16 overflow-hidden inline-block absolute bottom-8 left-[10] z-0">
        <div class=" h-11 w-11 border-2 shadow-lg bg-white -rotate-45 transform origin-top-left "></div>
      </div>
    </>
  );
};

function CustomizerOptions() {
  return (
    <div
      className="fixed
     flex
    justify-between items-center
    w-1/4 h-16 border-2 border-solid 
    border-black-500  bottom-10 left-[150px]
     bg-white rounded-full shadow
     p-4"
    >
      <div className="cursor-pointer w-16 h-10 border-r-2 border-r-solid border-r-gray-400 relative ">
        <img src={zoomInIcon} alt="" />
        <ToolTip title={"Zoom In"} shortCut={"Ctrl +"} />
      </div>
      <div className="cursor-pointer w-16 h-10 border-r-2 border-r-solid border-r-gray-400 relative">
        <img src={zoomOutIcon} alt="" />
      </div>
      <div className="cursor-pointer w-16 h-10 border-r-2 border-r-solid border-r-gray-400 relative">
        <img src={rotateX} alt="" />
      </div>
      <div className="cursor-pointer w-16 h-10 relative ">
        <img src={rotateY} alt="" />
      </div>
    </div>
  );
}

export default CustomizerOptions;
