import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/ExpandMore';


export default function QuestionAcordian() {
    const acordian=[
        {
        'summary':'Do you offer Freelancers?',
        'details':' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
        {
        'summary':'Whats the guarantee that I will we satisfied with the hiring Talent',
        'details':' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
        {
        'summary':'can I hire a multiple talent at once?',
        'details':' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
        {
        'summary':'Why should I not go to an agency directly?',
        'details':' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
        {
        'summary':' Who can help me pick a right skillset and duration for me?',
        'details':' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
];
  return (
    <div>
      {
        acordian.map((item,id)=>{
            return <Accordion key={id} sx={{borderBottom:'1px solid grey'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: '#E8EEE7', padding: '8px', borderRadius:'2px',  borderBottom: '2px',
              fontWeight: 'bold',fontSize:'20px' }}
        >
         {item.summary}
        </AccordionSummary>
        <AccordionDetails expandIcon={<AddIcon/>} 
          sx={{ backgroundColor: '#E8EEE7', padding: '8px', borderRadius:'2px' }}>
          {item.details}
        </AccordionDetails>
      </Accordion>
        })
      }
    </div>
  );
}
