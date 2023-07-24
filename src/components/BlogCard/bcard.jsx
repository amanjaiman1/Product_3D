import React from "react";
export default function Card(props) {
  return (
    <div className="m-4 bg-slate-300 rounded-lg flex flex-col justify-center">
      <img src={props.image} className="p-6" />
      <p className="text-slate-500 text-sm lg:text-lg m-2 text-center">
        T-SHIRT DESIGN TIPS
      </p>
      <p className="text-blue-900 font-extrabold text-lg lg:text-xl m-4 overflow-hidden text-center">
        {props.title}
      </p>
    </div>
  );
}
