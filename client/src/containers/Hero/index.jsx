import { useNavigate } from "react-router-dom";
import React from "react";
import { hero } from "../../assets";
import Button from "../../components/Button";

function Hero() {
  const navigate = useNavigate();

  const navigateToCustomisation = () => {
    navigate("/tshirt-customisation");
  };
  return (
    <div className="h-screen flex justify-center items-center flex-wrap-reverse ">
      <div className="flex-1">
        <span className="text-primary bg-hero-badge-bg bg-opacity-60 text-opacity-70 font-semibold p-2 rounded max-[600px]:flex max-[600px]:justify-center">
          AI-Powered 3D T-Shirts
        </span>
        <div className="py-3">
          <h1 className="mt-5 text-heading font-semibold min-[600px]:text-5xl max-[600px]:text-4xl min-[600px]:leading-normal max-[600px]:leading-tight max-[600px]:text-center animate__animated animate__fadeInLeft animation-duration: 2s; animate_slower">
            Elevate Your Style with Intelligent Fashion
          </h1>
          <p className="text-secondary font-normal pt-3 leading-loose max-[600px]:text-center">
            Indulge in the mesmerizing world of 3D fashion and elevate your
            style with our extraordinary collection of vibrant designs.
          </p>
        </div>
        <div className="pt-3 max-[600px]:flex max-[600px]:justify-center">
          <Button onClick={navigateToCustomisation}>Design Now</Button>
        </div>
      </div>
      <div className="flex-3 animate__animated animate__zoomIn  animation-duration: 3s; animate__slow">
        <img src={hero} alt="hero image" />
      </div>
    </div>
  );
}

export default Hero;
