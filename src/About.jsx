import React from 'react'

function About() {
  return (
   <>
   <div className='px-16 py-16 w-screen flex justify-center '>
   <div>
   <h1 className='flex font-semibold text-3xl py-5'>About PyHack</h1>
    <h1 className='py-1'>
    PyHack is a dynamic, community-driven workshop designed to teach game development using Python.
    </h1>
    <div class="group text-[#5f5f5f] px-2  transition duration-300 font-medium cursor-pointer pb-5">
           <h1 className='flex '> Learn More<span className='flex justify-center items-center px-2'><img src='src\assets\vector (2).png'></img></span></h1>
            <span class="block max-w-0 w-24 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
          </div>
          <div>
    <img src='src\assets\bento.png'></img>
   </div>
   </div>
   </div>
   
   </>
  )
}

export default About