'use client'

import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import React from 'react';
import LinkButton from './components/LinkButton';

import dynamic from 'next/dynamic';

const Courasel = dynamic(() => import('./components/courasel'), {
  ssr: false,
});

const Collection: React.FC = () => {
  return (
    <motion.section id="collection" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className='w-full h-screen'>
        <div className='w-[100%] flex justify-center'>
          <motion.div className='w-[70%] h-16' initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <Typography className='custom-header ml-[30%] mb-10'>{`Nfthub's`} <span className='custom-gradient'>collection</span></Typography>
            <Courasel />
            <motion.div className='ml-[35%] mt-10 w-[15rem]' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              <LinkButton text={'View collection'} arrow={true} link='#' />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Collection;
