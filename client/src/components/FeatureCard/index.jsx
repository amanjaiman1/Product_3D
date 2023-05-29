import React from 'react'

function FeatureCard({title, color, icon, desc}) {
  return (
    <div className='flex-1'>
        <div className="bg-white gap-y-10 m-5 p-6">
            <div className="flex justify-center items-center rounded-lg w-20 h-20 mx-4" style={{backgroundColor:color}}><img src={icon} alt="" /></div>
            <div className="text-primary font-mono my-6 text-3xl font-semibold mx-auto px-4 ">{title}</div>
            <div className="text-secondary my-4 w-285 mx-auto px-4 leading-relaxed">{desc}</div>
        </div>
    </div>
  )
}

export default FeatureCard