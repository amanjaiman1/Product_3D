import React, { useState } from 'react';
import background from '../../assets/image/background.png';
import ReactiveButton from 'reactive-button';
import sendImage from '../../assets/image/send2.gif';

function NewsLetter() {
  const [buttonState, setButtonState] = useState('idle');

  const onClickHandler = () => {
    setButtonState('loading');

    // send an HTTP request
    setTimeout(() => {
      setButtonState('success');
    }, 5000);
  };

  return (
    <div className="pt-10 md:pt-50 mx-auto max-w-1200 bg-cover bg-center" style={{ backgroundImage: `url(${background})`, borderRadius: '25px' }}>
      <div className="r-50 rounded-2xl flex flex-col items-center leading-8 p-5">
        <div className="rounded-2xl flex flex-col items-center leading-14 text-center">
          <h2 className="text-2xl font-bold text-[#090F4E] text-[2rem]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Sign up for our newsletter
          </h2>
        </div>
        <div className="text-custom2 text-secondary font-normal pt-3 leading-loose text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <br />
          Receive the latest news, updates, and more
          <br />
          every week
        </div>

        <form className="flex flex-col md:flex-row pt-3 md:pt-5 ml:w-full md:w-full lg:w-[600px]">
          <input
            type="email"
            placeholder="Enter your email address"
            required
        className="px-4 py-2 border border-gray-300 rounded-l-[40px] focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full md:max-w-[600px] h-[67px] md:h-[50px] max-sm:w-[300px] rounded-r-[50px] transition-shadow duration-300 hover:shadow-lg mb-4 md:mb-0 md:mr-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          />
          <ReactiveButton
            buttonState={buttonState}
            idleText="Subscribe"
            loadingText={
              buttonState === 'loading' ? (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={sendImage} alt="Sending" style={{ marginRight: '8px', width: '24px', height: '30px' }} />
                  <span style={{ fontSize: '13px' }}>Sending</span>
                </div>
              ) : (
                'Sending'
              )
            }
            color={'293FCC'}
            size="large"
            rounded={true}
            successText="Done"
            onClick={onClickHandler}
            type={'submit'}
            animation={true}
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className="w-full md:w-auto h-[49px] md:ml-0 max-sm:w-[49px] max-sm:h-[67px]  hover:shadow-lg transition-shadow duration-300"
          />
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
