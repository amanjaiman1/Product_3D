import React, { Children } from "react";

function DialogBox({ visible, children }) {
  return (
    <div
      className={`${
        visible ? "block" : "hidden"
      } w-full h-full fixed top-0 left-0 p-10 flex justify-center items-center z-50 bg-[#000]/[0.1]`}
    >
      <div className="bg-[#09090C] w-[500px] h-[200px] rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
}

export default DialogBox;
