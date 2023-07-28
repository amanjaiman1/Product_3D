import React from "react";

const Create = () => {
  return (
    <div className="">
      <section className="h-[100vh] bg-black w-[100vw] ">
        <div className="text-center align-middle pt-40">
          <h1 className="create-text text-[50px]">You are</h1>
          <h1 className="create-text mt-28 text-[80px]">THE CREATOR</h1>
        </div>
      </section>
      <section className="h-[100vh] border-t-2 bg-black w-[100%]">
        <div className="text-center align-middle pt-20">
          <h1 className="create-text text-[50px] border-l-2">Introducing</h1>
          <hr className="w-[45%]" />
          <h1 className="create-text mt-5 text-[80px] border-r-2">CUSTOMISER</h1>
          <hr className="w-[45%]  float-right" />
        </div>
      </section>
      <section className="h-[100vh] border-t-2 bg-black w-[100%]">
        <div className="text-center align-middle pt-20">
          <h1 className="create-text text-[50px] ">Design</h1>
          <h1 className="create-text mt-5 text-[80px] border-r-2">What You Want</h1>
        </div>
      </section>
    </div>
  );
};

export default Create;
