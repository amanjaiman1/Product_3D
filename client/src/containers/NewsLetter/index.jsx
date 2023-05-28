import React from 'react';
import background from '../../assets/image/background.png';

function NewsLetter() {
  return (
    <div className="pt-50 mx-auto max-w-1200 bg-cover bg-center" style={{ backgroundImage: `url(${background})`, borderRadius: '25px' }}>
      <div className="r-50 rounded-2xl flex flex-col items-center leading-8 p-[40px]">
        <div className="rounded-2xl flex flex-col items-center leading-14 text-center">
          <h2 className="text-2xl font-bold text-[#090F4E] text-[2rem]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Sign up to our newsletter
          </h2>
        </div>
        <div className="text-custom2 text-secondary font-normal pt-3 leading-loose text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <br />
          Receive latest news, updates, and many other
          <br />
          news every week
        </div>

        <form className="flex pt-[15px]">
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="px-4 py-2 border border-gray-300 rounded-l-[50px] focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[480px] h-[67px] rounded-r-[50px] transition-shadow duration-300 hover:shadow-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          />
          <div className="flex items-center">
            <svg
              className="text-white mx-2 absolute left-[64%] cursor-pointer transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" />
            </svg>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
