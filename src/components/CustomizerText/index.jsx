import React, { useState, useRef } from "react";
import { useSnapshot } from "valtio";
import state from "../CustomizerViewer/valito";
import { ChromePicker } from "react-color";

function CustomizerText() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedFontFamily, setSelectedFontFamily] = useState("Arial");
  const inputRef = useRef(null);
  const snap = useSnapshot(state);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    setImage(URL.createObjectURL(uploadedImage));
    state.logoDecal = URL.createObjectURL(uploadedImage);
  };

  const handleFullDecalUpdate = () => {
    if (image) {
      state.fullDecal = image;
      state.isFullTexture = !state.isFullTexture;
    }
  };

  const handleAddText = () => {
    if (text) {
      state.textDecal.content = text;
    }
  };

  const handleColorChange = (color) => {
    state.textDecal.textcolor = color.hex;
  };

  const handleColorButtonClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleFontFamilyChange = (event) => {
    setSelectedFontFamily(event.target.value);
    state.textDecal.fontFamily = event.target.value;
  };

  const handlePositionUpdate = (axis, direction) => {
    const newPosition = [...state.textDecal.position];
    if (axis === 0) {
      newPosition[0] -= direction;
    } else if (axis === 1) {
      newPosition[1] += direction;
    } else if (axis === 2) {
      newPosition[2] += direction;
    }
    state.textDecal.position = newPosition.slice(); // Update the position state
  };

  const handleFontSizeUpdate = (direction) => {
    state.textDecal.fontSize += direction * 0.01;
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">CustomizerText</h1>
      <div className="mb-4">
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text"
          className="border border-gray-400 rounded-md p-2 w-full sm:w-auto"
          ref={inputRef}
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center mb-4">
        <button
          onClick={handleAddText}
          className="bg-blue-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md mb-2 sm:mb-0 sm:mr-2"
        >
          Add Text
        </button>
        <div className="flex items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={inputRef}
          />
          <button
            onClick={handleFullDecalUpdate}
            className="bg-gray-300 hover:bg-yellow-300 text-gray-800 font-bold py-2 px-4 rounded-md ml-2"
          >
            {state.isFullTexture ? "Full On" : "Full Off"}
          </button>
        </div>
      </div>
      <button
        onClick={handleColorButtonClick}
        className="bg-gray-300 hover:bg-yellow-300 text-gray-800 font-bold py-2 px-4 rounded-md mr-2"
      >
        Color
      </button>
      {showColorPicker && (
        <div className="mt-2">
          <ChromePicker
            color={snap.textDecal.textcolor}
            onChange={handleColorChange}
            disableAlpha={true}
          />
        </div>
      )}

      <div className="mt-4">
        <label className="mr-2 font-bold">Font Size:</label>
        <div className="flex">
          <button
            onClick={() => handleFontSizeUpdate(1)}
            className="border border-gray-400 rounded-full px-3 py-1 mr-2 hover:bg-yellow-300"
          >
            ↑
          </button>
          <button
            onClick={() => handleFontSizeUpdate(-1)}
            className="border border-gray-400 rounded-full px-3 py-1 hover:bg-yellow-300"
          >
            ↓
          </button>
        </div>
      </div>
      <div className="mt-4">
        <label className="mr-2 font-bold">Position:</label>
        <div className="flex">
          <button
            onClick={() => handlePositionUpdate(0, -0.1)}
            className="border border-gray-400 rounded-full px-3 py-1 mr-2 hover:bg-yellow-300"
          >
            →
          </button>
          <button
            onClick={() => handlePositionUpdate(0, 0.1)}
            className="border border-gray-400 rounded-full px-3 py-1 mr-2 hover:bg-yellow-300"
          >
            ←
          </button>
          <button
            onClick={() => handlePositionUpdate(1, 0.1)}
            className="border border-gray-400 rounded-full px-3 py-1 mr-2 hover:bg-yellow-300"
          >
            ↑
          </button>
          <button
            onClick={() => handlePositionUpdate(1, -0.1)}
            className="border border-gray-400 rounded-full px-3 py-1 hover:bg-yellow-300"
          >
            ↓
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomizerText;
