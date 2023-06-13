import React from "react";

function CustomizerTabs() {
  const data = [
    {
      tabId: 1,
      tabName: "Design",
      tabPanel: <div></div>,
    },
    {
      tabId: 2,
      tabName: "Colors",
      tabPanel: <div></div>,
    },
    {
      tabId: 3,
      tabName: "Text",
      tabPanel: <div></div>,
    },
    {
      tabId: 3,
      tabName: "Logos",
      tabPanel: <div></div>,
    },
  ];
  return (
    <div>
      <div className="flex justify-between px-16">
        {data.map((e) => (
          <ul className="m-5">{e.tabName}</ul>
        ))}
      </div>
      <div className="flex">
        
      </div>
    </div>
  );
}

export default CustomizerTabs;
