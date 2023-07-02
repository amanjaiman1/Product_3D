import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function CustomizerTopbar() {
  const navigate = useNavigate();
  return (
    <div className="shadow m-3 p-3 flex justify-between  items-center sticky top-0 z-100 backdrop-filter backdrop-blur-lg">
      <div>Recents</div>
      <div className="flex space-x-2">
        <Button
          onClick={() => {
            navigate("/app/customizer/editor");
          }}
        >
          Design New T-shirt
        </Button>
        <Button className={"bg-pink-600 hover:bg-pink-500"}>Import</Button>
      </div>
    </div>
  );
}

export default CustomizerTopbar;
