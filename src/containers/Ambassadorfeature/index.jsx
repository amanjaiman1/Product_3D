import React from "react";
import { ambassadorbg, minus } from "../../assets";

const Ambassadorfeature = () => {
  return (
    <div className="w-full h-[300vh] mt-20  flex">
      <div className="w-1/2 p-5 ml-20 mr-20">
        <div className="flex flex-col">
          <div className="text-left heading">
            <h1 className="text-white text-4xl">
              <span className="font-semibold text-pink-500">The purpose</span> of the
              program
            </h1>
            <p className="text-base text-pink-200 leading-relaxed mt-10">
              Aleph Zero's Brand Ambassadors play an essential role in educating the
              wider community and collaborating with the core team on translations,
              community management, running meetups and local conferences, as well as
              a variety of different activities. Our Ambassadors also have the
              opportunity to beta-test <br />
              new features of Aleph Zero and its partner products!
            </p>
            <p className="text-base text-pink-200 leading-relaxed mt-10 font-semibold">
              The current program will run through 2022, with participants divided
              into four cohorts.
            </p>
            <p className="text-base text-pink-200 leading-relaxed mt-10">
              At the end of every quarter, we'll be evaluating the submissions from
              the last three months and reaching out to selected parties. Once
              accepted, Ambassadors will remain with the program as new Ambassadors
              are onboarded through the cohorts.
            </p>
          </div>
        </div>

        <div>
          <img src={ambassadorbg} alt="" />
          <img src={ambassadorbg} alt="" className="mt-60" />
        </div>
      </div>
      <div className="w-1/2 p-5 ml-20 mr-20">
        <div className="flex text-3xl mb-10 ">
          <span className="text-pink-600 font-bold"> | </span>
          <h1 className="mr-3 ml-3 font-semibold text-white">Who</h1>
          <span className="text-white text-3xl">we are looking for ?</span>
        </div>
        <div className="grid grid-cols-2">
          <div className="01 mb-10">
            <h1 className="text-white text-xl">
              <span className="text-pink-600 text-2xl">•</span> Pro active leader
            </h1>
            <p className=" mt-5 text-pink-200 text-sm max-w-[200px] ml-4 leading-relaxed">
              with a proven track record of being empathetic and engaging with others
              online.
            </p>
          </div>
          <div className="01 mb-10">
            <h1 className="text-white text-xl">
              <span className="text-pink-600 text-2xl">•</span> Social media
              Experters
            </h1>
            <p className=" mt-5 text-pink-200 text-sm max-w-[200px] ml-4 leading-relaxed">
              who can help us shape the image of Aleph Zero in the years to come.
            </p>
          </div>
          <div className="01 mb-10">
            <h1 className="text-white text-xl">
              <span className="text-pink-600 text-2xl">•</span> Quality assurance{" "}
              <span className="ml-5"> magicians</span>
            </h1>
            <p className=" mt-5 text-pink-200 text-sm max-w-[200px] ml-4 leading-relaxed">
              who will battle test Fashion Froze 3D products before releasing them to
              a wider public.
            </p>
          </div>
          <div className="01 mb-10">
            <h1 className="text-white text-xl">
              <span className="text-pink-600 text-2xl">•</span> Relationship builders
            </h1>
            <p className=" mt-5 text-pink-200 text-sm max-w-[200px] ml-4 leading-relaxed">
              who can help to boost Fashion Froze 3D visibility and adoption across
              different industries.
            </p>
          </div>
        </div>
        <div>
          <div className="flex text-3xl mb-10 mt-40 ">
            <span className="text-pink-600 font-bold"> | </span>
            <h1 className="mr-3 ml-3 font-semibold text-white">What</h1>
            <span className="text-white text-3xl">are the perks ?</span>
          </div>
          <div className="grid grid-cols-2">
            <div className="01 mb-10">
              <h1 className="text-white text-xl">
                <span className="text-pink-600 text-2xl">•</span> Bounties
              </h1>
              <p className=" mt-5 text-pink-200 text-sm max-w-[200px] ml-4 leading-relaxed">
                Help us work on the Fashion Froze ecosystem—assist in tasks such as
                content, translations, documentation, and more! Bear in mind that
                executing certain tasks comes with remuneration and might require
                formal agreements.
              </p>
            </div>
            <div className="01 mb-10">
              <h1 className="text-white text-xl">
                <span className="text-pink-600 text-2xl">•</span> FF Swag
              </h1>
              <p className=" mt-5 text-pink-200 text-sm max-w-[200px] ml-4 leading-relaxed">
                Test–drive our branded swag and show your love for the network in the
                real world!
              </p>
            </div>
            <div className="01 mb-10">
              <h1 className="text-white text-xl">
                <span className="text-pink-600 text-2xl">•</span> Exclusive NFT's{" "}
                <span className="ml-5"> magicians</span>
              </h1>
              <p className=" mt-5 text-pink-200 text-sm max-w-[200px] ml-4 leading-relaxed">
                As soon as the NFT infrastructure is ready on Fashion Froze, you will
                receive an exclusive NFT as a network ambassador.
              </p>
            </div>
            <div className="01 mb-10">
              <h1 className="text-white text-xl">
                <span className="text-pink-600 text-2xl">•</span> In-house
                Collabration
              </h1>
              <p className=" mt-5 text-pink-200 text-sm max-w-[200px] ml-4 leading-relaxed">
                You’ll have a direct line of communication to the Fashion Froze core
                team. We hope that some of these relationships might even convert
                into opportunities to officially work together!
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex text-3xl mb-10 mt-40 ">
            <span className="text-pink-600 font-bold"> | </span>
            <h1 className="mr-3 ml-3 font-semibold text-white">Who</h1>
            <span className="text-white text-3xl">will we require ?</span>
          </div>
          <div className="grid grid-cols-2">
            <div className="01 mb-10">
              <h1 className="text-white text-xl">
                <span className="text-pink-600 text-2xl">•</span> Your availability
              </h1>
              <p className=" mt-5 text-pink-200 text-sm max-w-[200px] ml-4 leading-relaxed">
                The Ambassador program requires you to be active — please make sure
                you have the capacity to get involved in it.
              </p>
            </div>
            <div className="01 mb-10">
              <h1 className="text-white text-xl">
                <span className="text-pink-600 text-2xl">•</span> Your awesomeness
              </h1>
              <p className=" mt-5 text-pink-200 text-sm max-w-[200px] ml-4 leading-relaxed">
                The Fashion Froze team will be extremely selective when it comes to
                building the ambassador program. It will be divided into several
                cohorts from which we seek to select the best and brightest community
                ambassadors.
              </p>
            </div>
            <div className="01 mb-10">
              <h1 className="text-white text-xl">
                <span className="text-pink-600 text-2xl">•</span> Your empathy
              </h1>
              <p className=" mt-5 text-pink-200 text-sm max-w-[200px] ml-4 leading-relaxed">
                Blockchain is one of the most diverse and experimental industries
                globally, and we want to celebrate that spirit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ambassadorfeature;
