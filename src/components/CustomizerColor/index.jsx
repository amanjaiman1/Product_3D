import React, { useState } from "react";
import state from "../CustomizerViewer/valito";
import Button from "../Button";
function CustomizerColor() {
  var colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
    state.color = color; // Update the color property in valito.js
  };

  const handleBasicColorClick = (color, index) => {
    setSelectedColor(color);
    setSelectedColorIndex(index);
    state.color = color; // Update the color property in valito.js
  };

  return (
    <div className="flex flex-col items-center relative mt-10">
      <div className="absolute right-10 top-[-50px]">
        <Button className={"bg-primary text-white"}>
          <label htmlFor="inputColor">Custom Color</label>
        </Button>
        <input
          name="inputColor"
          id="inputColor"
          hidden
          type="color"
          value={selectedColor}
          onChange={handleColorChange}
          className="my-4 absolute rounded right-0"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {colorArray?.map((color, index) => (
          <div
            key={index}
            className={`w-[100px] h-[100px]  m-1 cursor-pointer ${
              selectedColorIndex === index ? "ring-2 ring-black" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleBasicColorClick(color, index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default CustomizerColor;
