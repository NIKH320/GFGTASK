import React from 'react'

function Footer() {
  return (
    <>
   <div>
   <div className='bg-[#F7F7F6] px-16 py-16 rounded-xl flex justify-between  max-sm:text-xs'>
         <div>
        <div className='flex '>
            <img src='src\assets\logo (2).png' className='h-10'></img>
            <div className=' pl-2 flex justify-center items-center'><img src='src\assets\gfgxpyhack.png' className='h-5 flex justify-center items-center '></img></div>
        </div>
        <div className='py-10'>
            <h1 className='text-[#636363]  max-w-[800px]'>
            PyHack provides a wide range of resources and hands-on experience to help you master Python-based game development. Explore new techniques, share your creations, and collaborate with fellow developers. Whether you're looking to build indie games or start a career in the gaming industry, PyHack is the place to begin.
            </h1>
        </div>
         </div>
         <div className='flex pl-5'>
    <div className='flex flex-col text-[#636363] pr-2'>
        <h1  className='text-black font-semibold cursor-default'>Resources</h1>
        <h1 className='cursor-pointer'>Brand</h1>
        <h1 className='cursor-pointer'>FAQ</h1>
        <h1 className='cursor-pointer'>Help & Support</h1>
        <h1 className='cursor-pointer'>Governance</h1>
    </div>
    <div className='text-[#636363] pr-2'>
    <h1 className='text-black font-semibold cursor-default'>Developers</h1>
    <h1 className='cursor-pointer'>Technical Paper</h1>
    <h1 className='cursor-pointer'>Security</h1>
    <h1 className='cursor-pointer'>Game Design</h1>
    </div>
    <div className='text-[#636363] pr-2'>
    <h1  className='text-black font-semibold cursor-default'>Company</h1>
    <h1 className='cursor-pointer'>Privacy Policy</h1>
    <h1 className='cursor-pointer'>Terms of Use</h1>
    <h1 className='cursor-pointer'>Contact</h1>
    </div>

         </div>
         </div>
         <div className='flex flex-col '>
            <img src="src\assets\borderbottom.png" className='pb-1'></img>
            <img src="src\assets\borderbottom (2).png"className='pb-1'></img>
            <img src="src\assets\borderbottom (3).png"></img>
         </div>
   </div>
    </>
  )
}

export default Footer