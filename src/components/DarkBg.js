import React from 'react'
// import me from '../assets/Images/2.jpg'
const DarkBg = ({click}) => {
  return (
    <div  className={`bg-dark text-darks absolute top-1/2 left-1/2 trans flex  ${click?' h-1/2 w-3/4 lg:w-1/2 ':' h-0 w-0'} z-10`}>
           
           <div className='w-full  flex relative flex-col justify-evenly p-6 cursor-pointer  items-center'>
           <div className='font-bold text-6xl'>Hi,</div>
           <div className='font-bold text-xl lg:text-2xl'>I'm Olanrewaju Ajayi.</div> 
           <div className='text-lg'>I design and Code simple yet beautiful websites.</div> 

           </div>

           {/* <div className='w-full lg:w-1/2 flex relative flex-col justify-evenly p-6 cursor-pointer'>
          <img src={me} className='absolute bottom-0 left-1/2 w-full h-auto tran-img' alt='me' />

           </div> */}
    </div>  
  )
}

export default DarkBg;