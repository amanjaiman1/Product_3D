import React, { Children } from "react";

function PopupModel({ visible, setVisible, children }) {
  return (
    <div
      className={`${
        visible ? "block" : "hidden"
      } w-full h-full bg-slate-800 fixed top-0 left-0 p-10`}
    >
      <div
        onClick={() => setVisible(false)}
        className="absolute top-5 right-5
       bg-red-700 text-lg p-3 w-10 h-10 
       hover:bg-red-600
       flex justify-center items-center font-semibold rounded-full text-white cursor-pointer"
      >
        X
      </div>
      <div className=" w-full h-full rounded-lg">{children}</div>
    </div>
  );
}

export default PopupModel;
