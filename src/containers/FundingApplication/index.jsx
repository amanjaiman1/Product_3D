import React from "react";
import {
  application,
  avail,
  funding,
  money,
  request,
  supporters,
} from "../../assets";

const FundingApplication = () => {
  return (
    <div className="w-full h-[630vh]">
      <div className="heading ml-10">
        <div className="flex mb-10">
          <span className="text-pink-600 font-semibold mr-2 text-3xl">|</span>
          <h1 className="text-white text-4xl">
            {" "}
            <span className="font-semibold">Request</span> for proposal
          </h1>
        </div>
        <p className="text-pink-100 leading-loose text-lg">
          The Ecosystem Funding Program is designed to support any activities leading
          to further adoption of the Fashion Froze network. While new products are
          the cornerstone of making Fashion Froze network the go-to platform for
          developers and users, several categories can be supported by the EFP.
          Details on RFPs are to come in the near future.
        </p>
      </div>
      <div className="mt-10 flex justify-center ml-10">
        <img src={request} alt="" className="w-[50%]" />
      </div>

      <div className="ml-10 mt-20">
        <div className="flex mb-10">
          <span className="text-pink-600 font-semibold mr-2 text-3xl">|</span>
          <h1 className="text-white text-4xl">
            {" "}
            <span className="font-semibold">Application</span> process
          </h1>
        </div>
        <p className="text-pink-100 leading-loose text-lg mt-10 mb-5">
          The Ecosystem Funding Program application review takes approximately 3
          weeks, but it can also take longer depending on the complexity of your
          submission and project.
        </p>
        <p className="text-pink-100 leading-loose text-lg mb-5">
          The best projects that complete the Ecosystem Funding Program may be chosen
          to pitch Fashion Froze VCs and secure further funding. There are also
          opportunities to have your project audited or receive marketing support.
        </p>
        <p className="text-pink-100 leading-loose text-lg ">
          <span className="font-semibold">
            Submissions should include information about deliverables, projected
            milestones, and justification for funding requests.
          </span>{" "}
          Possible deviations from the specified scope of the project should be
          discussed with the Fashion Froze Foundation.
        </p>
        <div className="flex justify-center items-center mt-10">
          <img src={application} alt="" className="w-[50%] h-[20%] " />
        </div>
      </div>

      <div className="flex mt-20 mb-10 ml-10">
        <span className="text-pink-600 font-semibold mr-2 text-3xl">|</span>
        <h1 className="text-white text-4xl">
          {" "}
          <span className="font-semibold">EFP</span> Supporters
        </h1>
        <div className="mt-10 flex justify-center ml-10">
          <img src={supporters} alt="" className="w-[70%]" />
        </div>
      </div>
    </div>
  );
};

export default FundingApplication;
