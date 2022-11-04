import React from 'react'
import {BsGithub,BsTwitter,BsInstagram} from 'react-icons/bs'
// import { NavLink,Link } from 'react-router-dom'
const Socials = () => {
  return (
    <div className='fixed flex flex-col gap-3 bottom-0 left-4 items-center cursor-pointer'>
        <a  target='_blank' href="https://github.com/Reynalroddy" rel="noreferrer">
        <BsGithub className='w-6 h-6'/>
        </a>

        <a href='https://twitter.com/_r3ynal' target='_blank' rel="noreferrer">
        <BsTwitter className='w-6 h-6'/>
            </a>

            <a href='https://www.instagram.com/reynal_og/' rel="noreferrer" target='_blank'>
            <BsInstagram className='w-6 h-6'/>
            </a>


   
<div className='h-20 w-1 bg-dark'>

</div>
    </div>
  )
}

export default Socials