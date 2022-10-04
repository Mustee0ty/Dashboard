import React from 'react'
import { mastercard_logo,visa_logo } from '../utils/svg'

const Card = ({type}) => {
  return (
   <div className={`rounded-md py-2 px-3 space-y-10 ${ type === 'mastercard' ?  'bg-black' : 'bg-[#E0E7EA]'}`}>
    <h1 className={`items-end justify-end flex w-full ${type === "visa" ? "text-black" : "text-gray-100"} `}>
      01/09/2910
    </h1>
    <div className={` flex justify-between border-red-300`}>
      {(type === 'mastercard') ? 
      <div className='fill white'>
        {mastercard_logo}
      </div>
     : 
      <div>
        {visa_logo}
      </div>
     }
    <h1 className={`items-end justify-end flex w-full self-center ${ type === 'mastercard' ? 'text-white' : 'text-black' } `}>
      ....9202
    </h1>
    </div>
   </div>

  )
}

export default Card