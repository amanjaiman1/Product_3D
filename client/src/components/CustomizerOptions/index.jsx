import React,{useState} from "react";
import zoomInIcon from "../../assets/svg/zoomin.svg";
import zoomOutIcon from "../../assets/svg/zoomout.svg";
import rotateX from "../../assets/svg/rotate-x.svg";
import rotateY from "../../assets/svg/rotate-y.svg";

export const ToolTip = ({ index, current, title, shortCut ,setselectedOption}) => {
  console.log("INDEX",index);
  console.log("INDEX",current);
  const handleSelect = ()=>{
      console.log("Hello");
      setselectedOption(index)
  }
  return (
    <div onClick={handleSelect}  className={`${index!=current?"hidden":""}`}>
      <div className=" bg-white border-2 border-gray-300 rounded p-3 absolute w-[200px] bottom-[65px] right-[-60px] flex z-10">
        <span className="font-medium">{title}</span> <span className="ml-8 rounded bg-gray-200 shadow-[inset_0_0px_4px_rgba(0,0,0,0.1)]">{shortCut}</span>
      </div>
      <div  class="w-16 overflow-hidden inline-block absolute bottom-8 left-[10] z-0 ">
        <div class=" h-11 w-11 border-2 shadow-lg bg-white -rotate-45 transform origin-top-left border-gray-300"></div>
      </div>
    </div>
  );
};

function CustomizerOptions() {
  const [selectedOption, setselectedOption] = useState(0)
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
        <ToolTip index={0} current={selectedOption} setselectedOption={setselectedOption}  title={"Zoom In"} shortCut={"Ctrl +"} />
      </div>
      <div className="cursor-pointer w-16 h-10 border-r-2 border-r-solid border-r-gray-400 relative">
        <img src={zoomOutIcon} alt="" />
        <ToolTip index={1} current={selectedOption} setselectedOption={setselectedOption} title={"Zoom In"} shortCut={"Ctrl +"} />
      </div>
      <div className="cursor-pointer w-16 h-10 border-r-2 border-r-solid border-r-gray-400 relative">
        <img src={rotateX} alt="" />
        <ToolTip index={2} current={selectedOption} setselectedOption={setselectedOption} title={"Zoom In"} shortCut={"Ctrl +"} />
      </div>
      <div className="cursor-pointer w-16 h-10 border-r-solid border-r-gray-400 relative">
        <img src={rotateY} alt="" />
        <ToolTip index={3} current={selectedOption} setselectedOption={setselectedOption} title={"Zoom In"} shortCut={"Ctrl +"} />
      </div>
    </div>
  );
}

export default CustomizerOptions;