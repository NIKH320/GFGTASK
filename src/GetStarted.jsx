import React from 'react'

function GetStarted() {
  return (
  <>

<div className='px-16 py-16 w-screen max-sm:px-2 '>
    <h1 className='py-1 bg-gray-100 px-5 rounded-full flex max-sm:text-sm max-sm:w-screen max-w-fit'><span className='font-semibold'>Introducing an era of new and exciting game development</span><span className='px-2 cursor-pointer'>Read more</span><span className='flex justify-center items-center'>
        <img src='src\assets\vector.png' className='flex items-center justify-center '></img>
        </span></h1>
   </div>

   <div className='px-16'>
    <div className='font-semibold text-3xl'>
    Access the full power of Python Game Development.
    </div>
    <div className='text-[#636161]'>
        <h1>The ultimate game dev workshop for Python enthusiasts.</h1>
        <h1>Learn, create, and innovate with the most versatile pl.</h1>
    </div>
    <div className='flex px-10 pt-5 w-full'>
       <div className='border-2 px-10 rounded-full py-1 hover:bg-black hover:text-white '>
       <button className='flex '>Get Started<span className='flex justify-center items-center px-2 py-1'><img src='src\assets\vector (1).png' className='flex justify-center items-center hover:text-white '></img></span></button>
       </div>
    </div>
   </div>
   <div>
    <div className='px-16 h-full w-full flex flex-col justify-center overflow-x-hidden  '>
       
        <img src='src\assets\heroimage.png' className=''></img>
        <img src='src\assets\borderbottom.png' ></img>
    </div>
   </div>
  </>
  )
}

export default GetStarted