import React, { useState } from 'react'
import { data } from './data'
import Faqsub from './Faqsub'
function FAQ() {
    const  [click,setclick]=useState(false)
  return (
    <>
    <div className='px-16 max-sm:px-106 flex w-screen justify-center '>
        <h1 className='text-3xl font-bold  max-sm:text-2xl px-16'>FAQs</h1>
        <div className='pl-28  max-sm:pl-0 items-center py-5 flex w-screen justify-center'>
            <div className=''>
            <div className='w-[60vw]  '>
                {
                    data.map((item)=>{
                        return(
                            <Faqsub q={item.q} a={item.a}/>
                        )
                    })
                }
            </div>
            <div className='cursor-pointer'><img src='src\assets\cta.png' className='h-5 px-2'></img></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FAQ