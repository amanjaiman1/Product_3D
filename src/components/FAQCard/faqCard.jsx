import React from "react";
export default function Card(props) {
  return (
    <div className="faq rounded-lg flex flex-col justify-center text-white m-8 p-4 ">
      <div className="grid justify-center p-[5%]">
        <img src={props.icon} />
      </div>
      <div className="">
        <p className="font-medium text-lg text-center text-purple-400">
          {props.question}
        </p>
      </div>
      <p className="font-light text-base text-center text-slate-300 pt-4">
        {props.answer}
      </p>
    </div>
  );
}
