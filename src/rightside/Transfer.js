import React from 'react'

const Transfer = () => {
  return (

    <div className='w-full flex flex-col items-center justify-center px-2 py-2'>
      <h1 className='text-md w-full py-6'>
        <b className='text-4xl'> Transfer </b> to Visa or Mastercard
      </h1>
      <div className='grid grid-cols-3 gap-4 w-full'>
        <div className='col-span-3 border-b border-black space-x-4 flex items-center justify-between w-full py-3 px-3'>
          <h1 className='border-r self-center border-black w-[25%]'>From</h1>
          <h1 className='w-[50%] self-center'>MasterCard...</h1>
          <h1 className='font-bold text-2xl w-[25%] items-end justify-end flex'>
            60,450$
          </h1>
        </div>
        <div className='col-span-3 border-b border-black space-x-4 flex items-center justify-between w-full py-3 px-3'>
          <h1 className='border-r self-center border-black w-[25%]'>From</h1>
          <h1 className='w-[50%] self-center'>MasterCard...</h1>
          <div className='w-[25%] items-end justify-end flex'></div>
        </div>
        <div className='col-span-3 space-x-4 flex items-center justify-between w-full py-3 px-3'>
          <div className='w-[40%] flex space-x-4 border-b border-black py-4'>
            <h1 className='border-r border-black w-full self-center'>Amount</h1>
            <input type="number" className='w-full input text-xl font-bold' />
          </div>
          <div className='w-[40%] flex space-x-4 border-b border-black py-4'>
            <h1 className='border-r border-black w-full self-center'>CVV</h1>
            <input type="number" className='w-full input' />
          </div>
          <div className='W-[10%] smooth btn py-3 items-center justify-center flex'>
            <button>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transfer