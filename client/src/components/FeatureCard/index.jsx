import React, { useState } from 'react';
import './style.css';
function FeatureCard({ title, color, icon, desc }) {

  const [flip, setFlip] = useState(false)
  const handleCardHover = () => {
    setFlip(true);
  };

  const handleCardLeave = () => {
    setFlip(false);
  };

  return (
    <div className='card-grid' >
      <div  onMouseEnter={handleCardHover}
        onMouseLeave={handleCardLeave} className={`card ${flip ? 'flip' : ''}`} >
        {/* front */}
        <div className="front ">
          <div className="flex justify-center items-center rounded-lg w-16 h-16 mx-auto " style={{ backgroundColor: color }}>
            <img src={icon} alt="" />
          </div>
          <div className=" dark-primary font-Poppins my-6 text-2xl font-semibold text-center mx-auto px-4">{title}</div>
          <div></div>
        </div>
        {/* back */}
        <div className="back"> {desc}  </div>
      </div>
    </div>

  );
}

export default FeatureCard;
