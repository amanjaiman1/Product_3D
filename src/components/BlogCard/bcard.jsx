import React from "react";
export default function Card(props) {
  return (
    <div className="m-4 rounded-lg flex flex-col justify-center">
      <img src={props.image} className="mb-4" />
      <p className="text-slate-400 text-sm lg:text-lg m-2 text-left">
        T-SHIRT DESIGN TIPS
      </p>
      <p className="text-slate-300 font-medium text-base lg:text-lg m-2 overflow-hidden text-left">
        {props.title}
      </p>
    </div>
  );
}
