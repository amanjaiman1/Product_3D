import React from "react";
import { blog, email, query, support } from "../../assets";

const Helpfaq = () => {
  return (
    <div className="w-full relative mt-[5%]">
      <div className="grid grid-flow-row place-items-center">
        <div class="text-6xl mt-10 text-center font-normal">FAQ</div>
        <p class="mt-10 font-normal text-center text-5xl text-blue-300">
          Ask us Anything
        </p>
        <p class="mt-10 font-normal text-sm text-center text-white ">
          Have any questions ? We're here to assist you
        </p>
      </div>
      <div class="py-20 px-2">
        <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <div class="md:flex">
            <div class="w-full p-3">
              <div class="relative">
                <i class="absolute fa fa-search text-gray-400 top-5 left-4"></i>
                <input
                  type="text"
                  class="bg-white h-14 w-full px-12 rounded-lg focus:outline-none "
                  name=""
                />
                <span class="absolute top-4 right-5 border-l pl-4">
                  <i class="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ml-20 mr-20 mt-20">
        <div className="border p-5  pt-10 rounded-lg blogtitle helpbox">
          <div className="flex flex-col ">
            <img src={email} alt="" className="w-12 h-12 mb-10" />
            <h1 className="text-2xl text-left text-violet-300">
              What is your return policy?
            </h1>
            <p className="text-lg mt-5 text-gray-300">
              We offer a hassle-free 30-day return policy. If you're not satisfied
              with your purchase, you can return it within 30 days for a full refund
              or exchange.
            </p>
          </div>
        </div>
        <div className="border p-5  pt-10 rounded-lg blogtitle helpbox">
          <div className="flex flex-col ">
            <img src={email} alt="" className="w-12 h-12 mb-10" />
            <h1 className="text-2xl text-left text-violet-300">
              How do I track my order?
            </h1>
            <p className="text-lg mt-5 text-gray-300">
              Once your order is shipped, you'll receive a tracking number via email.
              You can use this number to track your order's delivery status on our
              website.
            </p>
          </div>
        </div>
        <div className="border p-5  pt-10 rounded-lg blogtitle helpbox">
          <div className="flex flex-col ">
            <img src={email} alt="" className="w-12 h-12 mb-10" />
            <h1 className="text-2xl text-left text-violet-300">
              Are your products environmentally friendly?
            </h1>
            <p className="text-lg mt-5 text-gray-300">
              Yes, we're committed to sustainability. Many of our products are made
              from eco-friendly materials, and we strive to minimize our
              environmental footprint throughout our production process.
            </p>
          </div>
        </div>
        <div className="border p-5  pt-10 rounded-lg blogtitle helpbox">
          <div className="flex flex-col ">
            <img src={email} alt="" className="w-12 h-12 mb-10" />
            <h1 className="text-2xl text-left text-violet-300">
              {" "}
              What payment methods do you accept?
            </h1>
            <p className="text-lg mt-5 text-gray-300">
              We accept a variety of payment methods, including credit/debit cards,
              PayPal, and Apple Pay. All transactions are securely processed to
              ensure your financial data is protected.
            </p>
          </div>
        </div>
        <div className="border p-5  pt-10 rounded-lg blogtitle helpbox">
          <div className="flex flex-col ">
            <img src={email} alt="" className="w-12 h-12 mb-10" />
            <h1 className="text-2xl text-left text-violet-300">
              How can I contact your customer support?
            </h1>
            <p className="text-lg mt-5 text-gray-300">
              You can reach our customer support team through our "Contact Us" page,
              where you'll find a form to submit your inquiries. We typically respond
              within 24 hours.
            </p>
          </div>
        </div>
        <div className="border p-5  pt-10 rounded-lg blogtitle helpbox">
          <div className="flex flex-col ">
            <img src={email} alt="" className="w-12 h-12 mb-10" />
            <h1 className="text-2xl text-left text-violet-300">
              Do you offer international shipping?
            </h1>
            <p className="text-lg mt-5 text-gray-300">
              Yes, we offer international shipping to many countries. Shipping rates
              and delivery times may vary depending on your location. During the
              checkout process, you can select your country to see available shipping
              options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpfaq;
