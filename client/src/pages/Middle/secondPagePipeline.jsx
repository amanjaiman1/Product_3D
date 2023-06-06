import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { mid } from "../../assets";

export function Middle() {
  return (
    <div className="h-screen flex justify-around items-center flex-wrap-reverse bg-blue-100">
      <div className=" ">
        <span className="text-primary bg-hero-badge-bg bg-opacity-60 text-opacity-70 font-semibold p-2 rounded max-[600px]:flex max-[600px]:justify-center">
          Customise your T-Shirts now
        </span>
        <div className="py-3">
          <h1 className="mt-5 text-heading font-semibold min-[600px]:text-5xl max-[600px]:text-4xl min-[600px]:leading-normal max-[600px]:leading-tight max-[600px]:text-center  ">
            Let's bring our imagination <br />
            to the real world.
          </h1>
          <p className="text-secondary font-normal pt-3 leading-loose max-[600px]:text-center max-w-2xl">
            Create your unique and exclusive shirt with our brand-new 3D
            customisation tool.Unleash your imagination and define your own
            style.
          </p>
        </div>
        <div className="pt-3 max-[600px]:flex max-[600px]:justify-center">
          <Button>Customise it</Button>
        </div>
      </div>

      <div className="flex-3  ">
        <img src={mid} className="shadow-[0px_20px_20px_10px_#a3bffa] " />
      </div>
    </div>
  );
}
