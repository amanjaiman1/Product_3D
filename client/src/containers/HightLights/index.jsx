import React from 'react';
import FeatureCard from '../../components/FeatureCard';
import { Card1, Card2, Card3 } from '../../assets';

function HightLights() {
  const data = [
    {
      title: '3D Visualization',
      color: '#FFF0E9',
      icon: Card1,
      desc:
        'Provide a dynamic and interactive viewing experience that allows customers to rotate, zoom in, and explore the 3D designs on the T-Shirts from different angles.',
    },
    {
      title: 'Customization',
      color: '#E9EDFF',
      icon: Card2,
      desc:
        'Allow customers to personalize their 3D T-Shirts by adding custom text, graphics, or images, creating a truly unique and one-of-a-kind piece.',
    },
    {
      title: 'AI-Powered 3D Design',
      color: '#FFF6DD',
      icon: Card3,
      desc:
        'AI-powered 3D T-Shirt website, where cutting-edge technology and stunning designs come together for an extraordinary fashion experience.',
    },
  ];

  return (
    <div className='my-20' style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="feature-header my-3">
        <div className="feature-title my-8 text-center">
          <h1 className='text-heading text-3xl font-semibold'>Essential Product Highlights and Features</h1>
        </div>
        <div className="text-secondary feature-desc text-center mx-auto px-4 leading-loose lg:px-60 font-[Poppins]">
          Revolutionize your fashion experience with our 3D T-Shirts' key features. Discover unparalleled depth,
          vibrant colors, and dynamic designs that come to life, thanks to cutting-edge AI technology.
          Elevate your style with intelligent fashion.
        </div>
      </div>
      <div className="flex flex-wrap justify-center font-[Poppins]">
        {data.map((item) => (
          <FeatureCard
            key={item.title}
            title={item.title}
            color={item.color}
            icon={item.icon}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default HightLights;
