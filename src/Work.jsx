import React from 'react'

function Work() {
  return (
   <>
   <div className='w-screen  flex justify-center  items-center  '>
    <div className='   '>
    <h1 className='text-3xl font-semibold py-5 flex max-sm:justify-center px-16 py-16'>Workshop Features</h1>
    <div className='flex flex-col w-full justify-center   '>
        <div className='flex pt-1 pb-4 max-sm:flex-col justify-center w-screen  '>
           <div className='flex justify-center '> <img src='src\assets\box.png' className='h-64 max-w-2xl:h-full max-sm:w-[70%]   pr-4 max-sm:pr-0 rounded-lg flex justify-center pb-4  '></img></div>
           <div className='flex justify-center '> <img src='src\assets\box (1).png' className='h-64  max-w-2xl:h-full   pr-4 max-sm:pr-0  max-sm:w-[70%]  rounded-lg pb-4  '></img></div>
        </div>
        <div className='flex max-sm:flex-col justify-center w-screen '>
        <div className='flex justify-center '><img src='src\assets\box (2).png' className='h-64 pr-4 max-w-2xl:h-full  max-sm:pr-0 max-sm:w-[70%]  rounded-lg pb-4 '></img></div>
        <div className='flex justify-center '><img src='src\assets\box (3).png' className='h-64 pr-4 max-w-2xl:h-full max-sm:pr-0  max-sm:w-[70%]  rounded-lg pb-4 '></img></div>
        </div>
    </div>
    </div>
   </div>
   </>
  )
}

export default Work