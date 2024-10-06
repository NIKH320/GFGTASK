import React from 'react'
import Navbar from './component/Navbar'
import GetStarted from './GetStarted'
import Work from './Work'
import About from './About'
import FAQ from './component/FAQ'
import Footer from './component/Footer'

function Home() {
  return (
   <>
  <div className='w-screen flex justify-center items-center '>
 <div className='w-screen'>
 <Navbar/>
  <GetStarted/>
<Work/>
<About/>
<FAQ/>
<Footer/>
 </div>
  </div>
   </>
  )
}

export default Home