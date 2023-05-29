import React from 'react'

function HightLights() {
  return (
    <div className="mb-20">
      <div className="feature-header my-3">
        <div className="feature-title my-8 text-center justify-center">
          <h1 className='text-heading text-3xl font-semibold '>Essential Product Highlights and Features</h1>          
        </div>
        <div className="text-secondary feature-desc text-center mx-auto px-4 leading-loose lg:px-60 text-lg">
          Revolutionize your fashion experience with our 3D T-Shirts' key features. Discover unparalleled depth, 
          vibrant colors, and dynamic designs that come to life, thanks to cutting-edge AI technology.
          Elevate your style with intelligent fashion.
        </div>
      </div>
      <div className="flex">
        {data.map(item => {
          return <FeatureCard 
            title = {item.title}
            color = {item.color}
            icon = {item.icon}
            desc = {item.desc}
          />
        })}
      </div>
    </div>
  )
}

export default HightLights