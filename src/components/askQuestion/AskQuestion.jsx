import React from 'react'
import QuestionAcordian from './QuestionAcordian'

function AskQuestion() {
  return (
    <div className='bg-[#E8EEE7] w-[94%] mx-auto mt-28 rounded-3xl p-10 flex mobile__class'>
       <div className=' md:ml-10'>
       <div ><img src='/whatsonyourmind.png' alt='whatsonyourmind' /></div>
       <p className='text-6xl font-semibold'>Ask Questions</p>
       </div>
       <div>
        <QuestionAcordian/>
       </div>
        
    </div>
  )
}

export default AskQuestion