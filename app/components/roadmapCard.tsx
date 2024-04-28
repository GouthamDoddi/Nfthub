'use client'

import React, { useEffect } from 'react'
import { RoadmapCardData } from '../types'
import { Divider, Typography } from '@mui/material'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RoadmapCard: React.FC<RoadmapCardData> = ({ header, headerMain, description, percentage }) => {

     useEffect(() => {
         AOS.init({
              duration: 800,
              once: false,
            })
      }, [])

    useGSAP(() => {
        gsap.to(`#circle-${percentage}`, {
                duration: 5,
                rotation: 360,
                yoyo: true,
                ease: 'none',
                repeat: -1
            });
        
    });

  return (
    <div data-aos="fade-up" className='w-250 h-300 border p-4 rounded-xl' style={{ borderColor: 'lightgray' }}>
        <div className='flex flex-row justify-between'>
            <p className='custom-gradient font-bold text-lg mt-5 uppercase'>{ header }</p>
            
            <div id={`circle-${percentage}`} className="relative w-14 h-14 rounded-full flex items-center justify-center" style={{
                background: 'linear-gradient(to right top, rgba(70, 76, 237), rgba(100, 63, 156, 1), rgb(233, 71, 160))',
                color: 'white',
                }}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center rotate-45 skew-y-12">
                    <span className="block text-2xl font-bold text-slate-100">{percentage}</span>
                    <span>%</span>
                </div>
            </div>

        </div>

      <Typography className='text-2xl font-bold mt-3'>{headerMain}</Typography>

      <p className='font-thin text-gray-200 mt-1 mb-4'>{description}</p>

      <div className='w-[30%] mb-2 mt-2'>
        <Divider />
      </div>

      <div className='w-80% flex flex-col'>

        <p className='py-2 flex justify-center'>Release website and logo</p>
        <p className='py-2 flex justify-center'>Grow community</p>
        <p className='py-2 flex justify-center'>Launch the project</p>
      </div>

    </div>
  )
}

export default RoadmapCard
