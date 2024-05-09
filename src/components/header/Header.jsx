import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router';

function Header() {
  const [activeState, setActiveState] = useState('talent');
  const navigate=useNavigate();
   function handleProject(){
   setActiveState('project');
   navigate('/getProject')

   }
  return (
    <div className='w-[90%] md:h-[90px] border-[2px] border-slate rounded-[50px] mx-auto mt-5 flex justify-between cursor-pointer mobile__class mobile__header '>
      <img src='/title.png' alt='title' className='md:ml-10 w-20 h-10 md:mt-5'/>
      <div>
        <Tabs>
          <Tab 
            label="Get-Projects" 
            sx={{
              border: '2px solid black',
              borderRadius: '50px',
              padding:'4px',
              marginLeft: '5px',
              marginTop: '20px',
              color: activeState === 'project'? 'white' : 'black',
              backgroundColor: activeState === 'project' ? 'black' : 'transparent',
              '&:hover':{
                opacity: 0.7
              }
            }} 
            onClick={handleProject} 
          />
          <Tab 
            label="Onboard Talent" 
            sx={{
              border: '2px solid black',
              borderRadius: '50px',
              marginLeft: '20px',
              marginTop: '20px',
              marginRight: '15px',
              color: activeState === 'talent' ? 'white' : 'black',
              backgroundColor: activeState === 'talent' ? 'black' : 'transparent',
              '&:hover':{
                opacity: 0.7
              }
            }} 
            onClick={() => setActiveState('talent')}
          />
        </Tabs>
      </div>
    </div>
  );
}

export default Header;
