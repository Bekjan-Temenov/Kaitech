import React from 'react'

interface props{
    children:React.ReactNode
}

export const Container:React.FC<props> = ({children}) => {
  return (
    <div
     className=' max-w-[1200px] sm:w-[90%] md:w-[90%] lg:w-[99%] xl:w-[100%] mx-auto w-[95%] '
     >
      {children}
    </div>  
  )
}
