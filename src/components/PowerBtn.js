import React from 'react'
import { NavLink } from 'react-router-dom'
const PowerBtn = () => {
  return (
    <NavLink to='/'>
    <div className='fixed top-8 left-1/2 -translate-x-1/2 translate-y-0 w-8 h-8 rounded-full bg-transparent flex justify-center items-center border border-black cursor-pointer hover:bg-green-400 hover:shadow-lg'> 
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
</svg>  
        </div>
        </NavLink> 
  )
}

export default PowerBtn