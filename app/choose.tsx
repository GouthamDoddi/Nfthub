"use client"

import { Divider, Grid, Typography } from '@mui/material'
import React, { useRef } from 'react'
import CustomHeader from './components/CustomHeader'
import TransprentCard from './components/TransprentCard'
import { cardBelowData, cardData } from './data'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Choose: React.FC = () => {

    gsap.registerPlugin(useGSAP);

    const container = useRef(null);

    useGSAP(() => {
        gsap.to(".even-cards", {
            duration: 3,
            y: 35,
            repeat: -1, 
            yoyo: true, 
            ease: "none" 
        })
        gsap.to(".odd-cards", {
            duration: 3,
            y: -35,
            repeat: -1, 
            yoyo: true, 
            ease: "none" 
        })
    })

  return (
    <section id="choose">
      <div className='w-full flex flex-col items-center'> 
      <div className='w-full'>
          <CustomHeader plainText={'Why'} colouredText={'choose us?'} />
      </div>

        <div className='w-[70%]'>
          <Grid container spacing={1}> 
            {cardData.map((card, index) => (
              <Grid key={index} item xs={6} sm={6} md={3} lg={3}>
                {
                    index % 2 == 0
                    ? <div className='even-cards'>
                        <TransprentCard icon={card.icon} header={card.header} description={card.description} />
                    </div>  
                    : <div className='odd-cards'> 
                        <TransprentCard icon={card.icon} header={card.header} description={card.description} />
                    </div>
                }
              </Grid>
            ))}
          </Grid>
        </div>

        <div className='w-[70%] mb-16'>
          <Grid container spacing={1}> 
            {cardBelowData.map((card, index) => (
              <Grid key={index} item xs={6} sm={4} md={3} lg={3}>

                <div className='flex justify-center'>

                    <div className='flex flex-col justify-center mt-24'>
                        <Typography className='custom-header'>
                            {card.header}
                        </Typography>
                        <Typography sx={{  fontWeight: 500, color: 'gray'}} >{card.description}</Typography>                        
                    </div>
                </div>

                    
                    <Divider orientation='vertical' className='-mt-16' />

              </Grid>
            ))}
          </Grid>
        </div>

      </div>
    </section>
  )
}

export default Choose
