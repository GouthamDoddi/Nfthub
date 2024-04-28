"use client"

import React from 'react';
import CustomHeader from './components/CustomHeader';
import { Grid, Typography } from '@mui/material';
import { profileData } from './data';
import ProfileCard from './components/ProfileCard';
import FAQAccordion from './components/Accordian';
import LinkButton from './components/LinkButton';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GridOffOutlined } from '@material-ui/icons';

const Blog: React.FC = () => {

    gsap.registerPlugin(useGSAP);


    useGSAP(() => {
        gsap.to(".even-cards", {
            duration: 3,
            y: 25,
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
    <section id="blog" className="mt-20">
        <div className="w-full h-full flex justify-center mt-28">
            <div className='w-[70%]'>
        
                <div className="w-full">
                    <CustomHeader plainText={'Meet'} colouredText={' the artists'} />
                </div>

                <Grid container spacing={3}>
                {profileData.map((card, index) => 
                    
                        index % 2 != 0
                        ? (
                            <Grid key={index} item xs={6} sm={6} md={3} lg={3} className="even-cards flex justify-center">
                                <ProfileCard image={card.image} name={card.name} role={card.role} />
                            </Grid>
                          )
                        : (<Grid key={index} item xs={6} sm={6} md={3} lg={3} className="odd-cards flex justify-center">
                            <ProfileCard image={card.image} name={card.name} role={card.role} />
                        </Grid>)
                    
                )}
                </Grid>
            </div>
        </div>
    
      

      <div className="flex flex-col items-center mt-16">
        <div className="w-[50%] mb-4 mt-4 -ml-4">
          <CustomHeader plainText='Your questions' colouredText=' Answered!' />
        </div>
        <div className="w-[70%]">
          <FAQAccordion />
        </div>
      </div>


      <div className='minting animate'>
        <Typography className='custom-header mb-4'>{`Let's start `} <span className='custom-gradient'>{'minting'}</span></Typography>
        <p style={{ color: 'gray' }}>Invest and manage all your nfts in one place.</p>

        <div className='w-[15rem] my-4 ml-8'>
            <LinkButton text='Get started' arrow={true} link='#' />
        </div>
      </div>
    </section>
  );
};

export default Blog;
