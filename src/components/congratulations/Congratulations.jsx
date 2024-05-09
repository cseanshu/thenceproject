import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function Congratulations() {
    const navigate=useNavigate();
    const [counter, setcounter] = useState(5);
    useEffect(()=>{
     const redirectInterval=setInterval(()=>{
        setcounter(prev=>prev-1);
     },1000);
     if(counter===0) {
        clearInterval(redirectInterval);
        navigate('/');
     }
     return ()=>clearInterval(redirectInterval);

    },[counter,navigate])
  return (
    <div>
    <div><img src='/title.png' alt='title' className='ml-10 w-20 h-10 lg:mt-10'/></div>
    <div className='flex flex-col justify-center items-center'>
      <img src='/Frame.png' alt='Frame'/>  
      <img src='Success Submitted.png' alt='Success Submitted'/>
      <p className='text-5xl font-semibold mt-5'>Congratulations</p>
      <p className='text-2xl text-gray-500 mt-5 text-center text-wrap font-semibold'>your request has been successfully Submitted to us.<br/> We will validate your information <br/>
      and reach out to youu shortly with updates.</p>
    </div>
    <div className='mt-20'> <p className='  text-gray-700 text-xl font-semibold text-center text-wrap'>Redirecting you to the homePage in
     <span className='text-black text-2xl font-bold ml-3'>{counter} Seconds</span></p></div>
    </div>
  )
}

export default Congratulations