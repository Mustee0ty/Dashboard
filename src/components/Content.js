import React from 'react'
import UpcomingBills from '../rightside/UpcomingBills'
import Statistics from './Statistics'
import Transfer from '../rightside/Transfer'

const Content = () => {
  return (
    <div className='w-full h-[90vh] space-x-4 items-center justify-center grid grid-cols-2 xl:grid-cols-3'>
      {/* left section */}
      <div className='items-center justify-center flex flex-col col-span-2 h-full py-2 px-3 w-full space-y-4'>
        {/* upper section */}
        <div className='pb-1 pt-12 px-3 w-full h-full space-y-8'>
          {/* title icons */}
          <div className='py-1 items-center justify-center w-full flex'>
            <h1 className='flex items-start w-full text-black text-2xl xl:text-4xl self-center font-bold text-bold'>Mastercard Gold</h1>
            <div className='flex items-end justify-end w-full space-x-4 '>
              <div>

              </div>
              <div>
                
              </div>
            </div>
          </div>
           {/* center part */}
          <div className='pb-2 pt-4 px-3 items-center justify-center grid grid-cols-2 xl:grid-cols-4 w-full '>
              <div className='xl:col-span-1 col-span-2 px-3 py-2 bg-[#F8F8F8] rounded-lg flex items-center w-full justify-between'>
                <div className='flex flex-col items-center justify-start w-full font-bold text-black text-xl'>
                  <h1 className='text-start items-start justify-start flex w-full font-bold text-black text-xl'>
                    ...4060
                  </h1>
                  <div className='flex flex-cols w-full items-center justify-between space-x-4'>
                    <p>01/22</p>
                    <p className='text-[#3C45AD]'> CVV CODE</p>
                  </div>
                </div>
                <div className='px-4'>

                </div>
              </div>
              <div className='py-3 px-3 w-full xl:col-span-3 col-span-2 xl:flex items-center justify-between xl:space-y-0 space-y-4 xl:space-x-4'>
                <div className='w-full items-start justify-start xl:items-center xl:justify-center flex flex-col'>
                  <h1 className='font-medium text-gray-500'> Cash Available </h1>
                  <h1 className='text-2xl font-bold'> $ 80 000 </h1>
                </div>
                <div className='w-full items-start justify-start xl:items-center xl:justify-center flex flex-col'>
                  <h1 className='font-medium text-gray-500'> Credit Limit </h1>
                  <h1 className='text-2xl font-bold'> $ 80 000 </h1>
                </div>
                <div className='w-full items-start justify-start xl:items-center xl:justify-center flex flex-col'>
                  <h1 className='font-medium text-gray-500'> Debt </h1>
                  <h1 className='text-2xl font-bold'> $ 24,300 </h1>
                </div>
              </div>
              <div className='px-3 w-full items-center justify-center flex'>
               
              </div>
             
            </div>
            <div className='py-4 px-6 w-full items-center justify-between xl:space-y-0 space-y-6 lg:flex bg-[#F8F8F8] rounded-lg'> 
                  svg
                  <div className='lg:flex justify-between items-center lg:space-x-12'>
                    <div className='space-y-2 '>
                      <h1 className='font-medium text-gray-500 text-lg'>Piggy Bank</h1>
                      <h1 className='font-bold text-2xl'>$100,000</h1>
                    </div>
                    <div className='space-y-2 '>
                      <h1 className='font-medium text-gray-500 text-lg'>Payment</h1>
                      <h1 className='font-bold text-2xl'>$100,405</h1>
                    </div>
                  </div>
                  <div className='lg:w-1/2 w-full items-start justify-start lg:items-end lg:justify-end flex lg:space-x-4 '>
                    S
                    <button className='bg-black smooth hover:bg-gray-100 hover:text-gray-900 hover:border-gray-900 text-gray-100 py-3 px-8 border border-transparent rounded-md'>
                      Pay
                    </button>
                  </div>
            </div>
        </div>
        {/* lower section */}
        <div className='py-q px-3 w-full h-full'>
          <Statistics />
        </div>
      </div>
       {/* Right section */}
       <div className='col-span-1 h-full xl:flex xl:flex-col hidden space-y-6 py-2 px-6 w-full'>
          <Transfer />
          <UpcomingBills />
        </div>
    </div>
  )
}

export default Content