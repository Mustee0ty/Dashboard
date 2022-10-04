import React from 'react'
import { Data, Data_bills } from '../data'

const UpcomingBills = () => {
  return (
    <div className='items-center justify-center flex flex-col space-y-6 w-full py-2 px-2'>
      <div className='flex w-full items-center justify-between'>
        <h1 className='font-bold text-3xl'>
          Upcoming Bills
        </h1>  
          <div className='py-2 px-2 bg-gray-100'>
            S
          </div>
      </div>
      <div className='grid grid-cols-3 w-full gap-x-4 items-center justify-center'>
        {Data_bills.map(({color,id,title,price,icon})=>(
         
          
          <div className={`${color} pb-6 pt-6 rounded-md px-3 w-full flex flex-col items-start justify-start`}>
            <div className={`pt-2 ${title === "Tinder Gold" && 'bg-gray-100 rounded-full pb-2 mb-2' }`}>
              {icon}
            </div>
            <h1 className={`text-md pb-6 pt-2 ${ id === 2 ? 'text-gray-100':'texy-black' }`}>
              {title}
            </h1>
            <h1 className={`font-bold text-xl ${ id === 2 ? 'text-gray-100':'texy-black' }`}>
              {price}
            </h1>
            <p className={`text-sm ${ id === 2 ? 'text-gray-100/50':'texy-gray-600' }`}>
              {" "}
               /Month {" "} </p>
          </div>


        ))}
      </div>
      <div className='flex w-full bg-gray-100 rounded-md px-3 py-4 items-start justify-start space-x-6'>
          <div className='bg-black rounded-full text-gray-200 py-2'>
              <p>Scrfm</p>
          </div>
          <div className='flex flex-col items-start space-y-4 justify-start w-full'>
            <h1>  You have 5,250 remaining funds over the next 15 days </h1>
            <div className='flex items-start text-[#3C45AO] font medium space-x-4 w-full justify-start'>
              <a className='text-blue-700 font-bold'> View Details </a>
              <h1>{">"}</h1>
            </div>
          </div>
      </div>
    </div>
  )
}

export default UpcomingBills