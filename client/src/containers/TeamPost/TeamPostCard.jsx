import React from 'react'
import CardData from './CardData';
import wolf from '../TeamPost/wolf.jpg';
import linkedin from '../TeamPost/linkedin.svg';
import star from '../TeamPost/star.svg';

const Card1 = (props) => {
  return (
    <>
      <div className="main-div flex max-sm:flex-col max-lg:flex-col max-lg:items-center  my-20 mx-20  overflow-x-auto">

        {props.details.map((value, index) => (

          <div className="card border-e-white shadow-md max-w-1/2 rounded-3xl px-6 py-6 mx-4 my-5 overflow-hidden min-w-min ">

            <ul className='flex py-6'>
              <li className='h-4 w-4'><img src={star} alt="#" /></li>
              <li className='h-4 w-4'><img src={star} alt="#" /></li>
              <li className='h-4 w-4'><img src={star} alt="#" /></li>
              <li className='h-4 w-4'><img src={star} alt="#" /></li>
              <li className='h-4 w-4'><img src={star} alt="#" /></li>
            </ul>
            <p>{value.desc}</p>
            <div className='profile-details my-5 flex  items-center'>
              <img src={wolf} alt="#" className='w-11 h-11 rounded-full item-center mr-4' />
              <div className="profileinfo mr-9">
                <h1 className='font-semibold'>{value.profilename}</h1>
                <p>{value.profiledesc}</p>
              </div>
              <img src={linkedin} alt="" className='w-10 h-10' />
            </div>



          </div>
        ))}
      </div>

    </>
  )
}

export default Card1