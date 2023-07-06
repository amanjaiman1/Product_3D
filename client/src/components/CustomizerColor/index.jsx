import React, { useState } from "react";
import state from '../CustomizerViewer/valito';

function CustomizerColor() {
  const basicColors = [
    "#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00",
    "#00FFFF", "#FF00FF", "#808080", "#D3D3D3", "#A9A9A9", "#A52A2A",
    "#FFA500", "#800080", "#FFC0CB", "#000080", "#008080", "#808000",
    "#800000", "#90EE90"
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
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center">
        {basicColors.map((color, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full m-1 cursor-pointer ${
              selectedColorIndex === index ? "ring-2 ring-black" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleBasicColorClick(color, index)}
          ></div>
        ))}
      </div>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        className="my-4 rounded border-gray-300 shadow border-2"
      />
    </div>
  );
}

export default CustomizerColor;
