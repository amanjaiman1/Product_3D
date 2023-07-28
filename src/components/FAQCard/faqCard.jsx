import React from "react";
export default function Card(props) {
  return (
    <div className="rounded-lg flex flex-col justify-center text-white m-8 ">
      <div className="grid justify-center p-[5%]">
        <img src={props.icon} />
      </div>
      <div className="">
        <p className="font-medium text-lg text-center text-slate-200">
          {props.question}
        </p>
      </div>
      <p className="font-light text-base text-center text-slate-400 pt-4">
        {props.answer}
      </p>
    </div>
  );
}
