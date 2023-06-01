import React, { useState } from 'react';

function FeatureCard({ title, color, icon, desc }) {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const handleShowMore = () => {
    setShowFullDesc(true);
  };

  const handleShowLess = () => {
    setShowFullDesc(false);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '....';
  };

  return (
    <div className='flex-1'>
      <div className="bg-white gap-y-2 m-14 p-6 rounded-lg flex flex-col items-center">
        <div className="flex justify-center items-center rounded-lg w-16 h-16 mx-auto" style={{ backgroundColor: color }}>
          <img src={icon} alt="" />
        </div>
        <div className="dark-primary font-Poppins my-6 text-2xl font-semibold text-center mx-auto px-4">{title}</div>
        <div className="text-secondary w-64 mx-auto px-4 leading-relaxed">
          <div className="flex flex-wrap">
            <div className="flex-grow text-left">
              {showFullDesc ? desc : truncateText(desc, 100)}
            </div>
            {!showFullDesc && desc.length > 100 && (
              <div className="w-full mt-2 text-right">
                <button className="text-blue-500 underline" onClick={handleShowMore}>
                  Get Started {'>>'}
                </button>
              </div>
            )}
            {showFullDesc && (
              <div className="w-full mt-2 text-right">
                <button className="text-blue-500 underline" onClick={handleShowLess}>
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
