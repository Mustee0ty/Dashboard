import { useState } from 'react';
import { nav_icon, notif_icon, search_icon } from '../utils/svg';
import NavLink from './Links.js/NavLink';

const navlinks = ["Overview", "Payments", "Cards", "Account", "Admin"]; 
const userImg = ''


const Header = () => {
  const [active,setActive] = useState("Overview")
  return (
    <div className='items-center justify-between flex w-full space-x-4 pb-3 pt-4 px-3'>
      {/* Logo */}
      <div className='border-b border-gray-900 w-[25%] flex md:space-x-2 md:pb-6 pb-2 items-center justify-center md:justify-start'>
        <img className='md:w-12 w-10 h-10' 
        src="https://img.icons8.com/dotty/80/000000/merchant-account.png" 
        alt="logo" />
        <h1 className='self-center hidden md:inline md:font-bold md:text-xl text-md'>OpenBank</h1>
      </div>
      {/* navlinks */}
      <div className='border-b pb-5 border-gray-900 w-[140%] items-center justify-center  flex space-x-2'>
      {navlinks.map((link)=>{
        return <div
         onClick={()=>setActive(link)} className='relative items-center justify-center flex'>
          <NavLink title={link} key={link} />  
          <div className={` ${link === active ? 'items-center justify-center flex absolute -bottom-3' : 'hidden' }`}>
            {nav_icon}
          </div>
        </div>
      })}
      </div>
      {/* login part */}
      <div className='border-b border-gray-900 pb-6 pt-4 hidden md:flex items-center justify-center px-3 space-x-4 w-[60%] '>
        <div>{search_icon}</div>
        <div>{notif_icon}</div>
        <img src={userImg} alt="userimage" className='w-8 h-8 rounded-full object-center object-cover' />
      </div>
    </div>
  )
}

export default Header