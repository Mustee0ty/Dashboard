import {useState} from 'react'
import { Data } from '../data';
import { Progress } from '@chakra-ui/react'

const Statistics = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className='items-center justify-between w-full flex flex-col'>
      {/*  filtering section */}
      <div className='items-start self-center justify-start lg:space-x-2 cursor-pointer w-full space-y-4 lg:space-y-0 lg:flex py-2 px-3'>
        {Array.from({length:2},(_,i)=>(
          <div onClick={()=>setActiveTab(i)} className={`self-center py-2 px-8 rounded-md text-lg ${activeTab === i 
            ? 'bg-black text-gray-100'
            : 'text-black bg-gray-100'
           } `}
           >
            { i === 0 ? 'statements' : 'Statistics' }
          </div>
        ))}
        <div className='items-center justify-end flex space-x-6 py-3 px-4 w-full'>
          <input type="date" className='bg-gray-100 py-2 px-4 rounded-md cursor-pointer'
          />
          <div className='bg-gray-100 py-2 px-2 rounded-md cursor-pointer '>
            S
          </div>
        </div>
      </div>
      {/* items */}
      {activeTab === 0? (<div>No statement</div>) : (
      <div className='h-[300px] overflow-y-scroll scrollbar-hide w-full py-3 px-4'>
        {Data.map((item)=>(
          <div className='flex w-full items-center justify-between py-6 px-3'>
            <p className={`${item.color} py-2 px-4 rounded-md mr-4 font-bold `}>{item.id + 1}</p>
            <h1 className='text-left items-start justify-start flex w-[35%] '>{item.title}</h1>
            {/* progress */}
            <Progress className='w-[25%] lg:inline hidden' colorScheme="blue" size="sm" value={item.value} />
            <h1 className='w-[25%] items-end justify-end flex font-medium text-black text-xl px-6'>{item.amount} $</h1>
          </div>
        ))}
      </div>
      )}
    </div>
  )
}

export default Statistics