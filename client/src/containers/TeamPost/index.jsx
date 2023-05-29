import React from 'react';
import TeamPostCard from './TeamPostCard';
import CardData from './CardData';


function TeamPost() {
  return (
    <>
      <div className="teamPostHeader text-center my-9">
        <h4 className='text-pink-700 text-lg py-4 font-medium'>REVIEWS</h4>
        <h1 className="font-semibold text-3xl">Go Through Reviews Of Previews Students To</h1>
        <h2 className='text-pink-700 text-2xl py-1 font-semibold'>Make An Informed Decision</h2>
      </div>
      <div><TeamPostCard details={CardData} /></div>
    </>

  )
}

export default TeamPost