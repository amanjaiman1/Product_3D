import React, { useState } from "react";
import CustomizerTabPanel from "../CustomizerTabPanel";
import CustomizerDesign from "../CustomizerDesign";
import CustomizerColor from "../CustomizerColor";
import CustomizerText from "../CustomizerText";
import CustomizerLogo from "../CustomizerLogo";

function CustomizerTabs() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const data = [
    {
      tabId: 1,
      tabName: "Design",
      tabPanel: <CustomizerDesign />,
    },
    {
      tabId: 2,
      tabName: "Colors",
      tabPanel: <CustomizerColor />,
    },
    {
      tabId: 3,
      tabName: "Text & Images",
      tabPanel: <CustomizerText />,
    },
    {
      tabId: 3,
      tabName: "Online Image",
      tabPanel: <CustomizerLogo />,
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center">
        {data &&
          data?.map((item, index) => {
            return (
              <ul
                key={index}
                onClick={() => setcurrentIndex(index)}
                className={` cursor-pointer font-semibold text-white relative px-5 ${
                  index == currentIndex &&
                  "text-violet-500 before:block before:absolute before:h-[2px] before:w-[25px] before:rounded-full before:top-[25px] before:bg-violet-500 relative inline-block"
                }`}
              >
                {item?.tabName}
              </ul>
            );
          })}
      </div>
      <div className="flex justify-center items-center mt-10  w-full ">
        <CustomizerTabPanel currentIndex={currentIndex} data={data} />
      </div>
    </div>
  );
}

export default CustomizerTabs;
