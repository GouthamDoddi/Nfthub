"use client"

import React, { useEffect, useRef } from 'react';
// import './Card.css'; // Import the CSS file for styling
import { WorkFlowData } from '../types';
import { Button } from '@mui/material';
import { GoArrowUpRight } from 'react-icons/go';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const WorkFlowCard: React.FC<WorkFlowData> = ({ image, index, header, description }) => {

    gsap.registerPlugin(useGSAP);


    const { ref, inView } = useInView({
        threshold: 0.5, // Adjust threshold as needed
    });

    useEffect(() => {
        if (inView) {
            gsap.to(`#card-image-${index}`, {
                duration: 1,
                y: 35,
                yoyo: true,
                ease: 'bounce',
                clearProps: 'all'
            });
        }
    }, [inView, index]);

  return (
    <div className={`flex items-center mb-2 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
    <Image ref={ref} id={`card-image-${index}`} width={500} height={500} className="card-image sm:block hidden" src={image} alt={header} />

    <div className="flex-grow px-4">
        <div className="bg-purple-100 rounded-full p-3 text-purple-600">
        <span className="custom-gradient font-bold text-lg">{'0'+ index + '.'}</span>
        </div>
        <h3 className="text-3xl font-bold mb-2">{header}</h3>
        <p className="text-gray-600">{description}</p>
        <Button
            sx={{borderRadius: '20px', fontWeight: 700, width: '10rem', marginTop: '15px', textTransform: 'none', backgroundColor: 'white', color: 'black'}}
            variant='contained' endIcon={<GoArrowUpRight />}>Learn more</Button>
    </div>
    </div>

  );
};

export default WorkFlowCard;