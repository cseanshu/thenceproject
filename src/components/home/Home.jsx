import React, { useState } from 'react'
import AskQuestion from '../askQuestion/AskQuestion'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Animation from '../animation/Animation'

function Home() {
    const data=[
        "Enhance fortune company's insights  team research capabilities",
         "Extra time to understand pratice and revision",
         "company's insights  team research Extra time to understand  "
    ]
    const [carusalcounter, setcarusalcounter] = useState(0);
    function handlecarusal(){
        setcarusalcounter(prev=>(prev+1)%data.length);    
    }
  return (
    <div>
    <Header/>
        <div className='flex flex-col justify-center items-center mt-20'>
            <img src='/succss.png' alt='success' className='-mt-10'/>
            <div className='text-center'><p className='text-5xl font-semibold mt-2'>Every success journey</p></div>
            <div className='text-center'><p className='text-5xl font-semibold mt-2'>we've encountered</p></div>
        </div>
        <div className='flex justify-center items-center mt-20 mobile__class '>
            <Animation/>
           <div className='flex flex-col md:ml-20 items-center right__carusol--div'>       {/* right side wala div hai */}
           <div className='w-32 text-start text-wrap'><p className='text-3xl font-semibold'>{data[carusalcounter]}</p></div>
            <div className='flex mt-10'>
                <div className='w-3 h-3 ml-4 rounded-[50%] bg-green-800 hover:bg-slate-400' onClick={handlecarusal}></div>
                <div className='w-3 h-3 ml-4 rounded-[50%] bg-slate-400 hover:bg-green-800' onClick={handlecarusal}></div>
                <div className='w-3 h-3 ml-4 rounded-[50%] bg-slate-400 hover:bg-green-800' onClick={handlecarusal}></div>
            </div>
            <button className='py-4 bg-black text-white px-8 font-semibold rounded-[50px] mt-20 hover:bg-slate-500'>Explore More &rarr;</button>
           </div>
        </div>
        <AskQuestion/>
      <Footer/>
    </div>
  )
}

export default Home