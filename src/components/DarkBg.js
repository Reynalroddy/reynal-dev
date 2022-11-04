import React from 'react'

const DarkBg = ({click}) => {
  return (
    <div  className={`bg-black absolute top-1/4 bottom-1/2 lg:translate-x-1/2 mx-auto ${click?' h-1/2 w-10/12 lg:w-1/2 ':' h-0 w-0'} z-10`}>
           
    </div>  
  )
}

export default DarkBg;