import React, { useState } from 'react'

function Faqsub({q,a}) {
    const  [click,setclick]=useState(false)
  return (
  <>
  <div onClick={()=>(setclick(!click))} className='bg-[#FAFAFA] my-2 py-2    rounded-xl flex justify-between  ' ><h1 className='px-5 '>{q}</h1><h1 className=''></h1><span className='h-10 w-10'><img src='src\assets\cross.png' className='   cursor-pointer '></img></span></div>
  {
    click?<div className='pl-5 border-2 rounded-xl py-2 text-green-400'>
        {a}
    </div>:null
  }
  </>
  )
}

export default Faqsub