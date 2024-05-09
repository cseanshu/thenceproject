import { Alert } from '@mui/material';
import React, { useState } from 'react'
import {useNavigate } from 'react-router'

function GetProject() {
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
     e.preventDefault();
     navigate('/congratulations');

    }
    function validForm(){
        if(name.trim()!=='' && email.trim()!=='' && isValidEmail(email)) return true;
        return false;
    }
    function isValidEmail(email) {
        // Regular expression to match the email format
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [emailtouched, setemailtouched] = useState(false)
  return (
    <div className='flex flex-col'>
        <div className='flex justify-between'>
        <div><img src='/title.png' alt='title' className='ml-10 w-20 h-10 mt-5'/></div>
        <div className='w-16 h-16 border-[2px] border-grey rounded-[50%] mt-2 mr-10 cursor-pointer '
         onClick={()=>navigate('/')}>
        <div className="w-[35px] h-[2px] bg-black transform rotate-45 mt-7 ml-3"></div>
        <div className="w-[35px] h-[2px] bg-black transform -rotate-45  ml-3"></div>
    </div>
        </div>
        <div><img src='Registration Form.png' alt='registration' className='mx-auto mt-10'/></div>
        <div><p className='text-5xl font-semibold text-center m-1'>Start your success</p></div>
        <div><p className='text-5xl font-semibold text-center m-1'>Journey here!!</p></div>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col  items-center'>
                <input type='text' placeholder='Enter your name' value={name} onChange={(e)=>setname(e.target.value)} className='py-[16px] px-[80px]  bg-gray-100 m-2 rounded-3xl outline-none' required/>
            <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>{
                setemailtouched(true)
                setemail(e.target.value)}} 
                className='py-[16px] px-[80px] bg-gray-100 m-2 rounded-3xl outline-none'/>
            {emailtouched && !isValidEmail(email) &&
                <Alert severity="error"  sx={{ bgcolor: 'transparent',color:'red',fontWeight:'bold' }}>Enter a valid email address</Alert>
                    }
            <button className='bg-gray-600 px-[150px] text-white py-[16px] rounded-3xl mt-2 font-bold cursor-pointer
             hover:bg-slate-200 hover:text-black' disabled={validForm}>submit</button>
            </div>
        </form>
    </div>
  )
}

export default GetProject