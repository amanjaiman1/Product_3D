import React from "react"
export default function Card(props){
    
    return(
        <div className="card">
            <img src={props.image} className="w-auto p-2"/>
            <p className="text-slate-500 text-sm lg:text-lg m-2">T-SHIRT DESIGN TIPS</p> 
            <p className="text-blue-900 font-extrabold text-lg lg:text-lg m-4 w-9/12">{props.title}</p>
        </div>
    )
}