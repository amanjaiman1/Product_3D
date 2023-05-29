// import React from 'react';
// import CardData from './CardData';
// import wolf from '../TeamPost/wolf.jpg';
// import linkedin from '../TeamPost/linkedin.svg';
// import star from '../TeamPost/star.svg';


// const card = (props) => {
//     return (
//         <>
//             <div className='main-div flex max-sm:flex-col max-lg:flex-col max-lg:items-center'>

//                 {props.details.map((value, index) => (
//                     <div className='teamPostCard shadow-lg rounded-lg my-10 py-1 text-center' key={index}>
//                         <li className="py-5 flex">
//                             <img className="h-5 w-5 rounded-full" src={star} alt="#" />
//                             <img className="h-5 w-5 rounded-full" src={star} alt="#" />
//                             <img className="h-5 w-5 rounded-full" src={star} alt="#" />
//                             <img className="h-5 w-5 rounded-full" src={star} alt="#" />
//                             <img className="h-5 w-5 rounded-full" src={star} alt="#" />
//                         </li>

//                         <div className="down-item">
//                             <div className="profileimg">
//                                 <a href="google.com"><img className="h-10 w-10 rounded-full" src={wolf} alt="" /></a>

//                             </div>
//                             <div className="profileinfo">
//                                 <h1 className='profilename'>{value.profilename}</h1>
//                                 <p className="profiledesc">{value.profiledesc}</p>
//                             </div>
//                             <div className="sociallink">
//                                 <img src={linkedin} alt="" />

//                             </div>
//                         </div>
//                     </div>

//                     </div>
//                 ))}
//         </div >


//         </>

//     )
// }

// export default card