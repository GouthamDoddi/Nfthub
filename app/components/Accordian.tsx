'use client'
import React, {useEffect} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ExpandMore } from '@material-ui/icons';
import { AccordionItemProps } from '../types';
import { accordionData } from '../data';
import AOS from 'aos';
import 'aos/dist/aos.css';



const AccordionItem: React.FC<AccordionItemProps> = ({ title, description }) => {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])

  return (
    <Accordion data-aos="fade-right">
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`${title}-content`}
        id={`${title}-header`}
      >
        <Typography className='font-bold text-lg'>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ color: 'gray' }}>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const FAQAccordion: React.FC = () => {

  return (
    <div>
      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default FAQAccordion;