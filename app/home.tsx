'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion';
import { Avatar, AvatarGroup, Grid, Typography } from "@mui/material";
import LinkButton from "./components/LinkButton";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';



export default function Home() {

    gsap.registerPlugin(useGSAP);

    const container = useRef(null);

    useGSAP(() => {
        gsap.to(["#cube1", "#cube2"], {
            duration: 5,
            x: 180,
            rotation: 360, 
            repeat: -1, 
            yoyo: true, 
            ease: "none" 
        })
    })

  return (
    <motion.section id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="w-full h-screen mt-20">
        <Grid container>

          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="mt-16 ml-4">
            <motion.div className="w-full h-full flex justify-center" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <div className="flex flex-col">
                <Typography className="text-4xl sm:text-5xl font-bold mb-3">
                  High Quality
                </Typography>
                <Typography className="mb-4 text-4xl sm:text-5xl font-bold">
                  NFT Collection
                </Typography>
                <p className="text-gray-500">{`A 890 piece custom Nfthub's collection is`}</p>
                <p className="text-gray-500 mb-8">Joining the NFT space on Opensea.</p>
                <LinkButton link={''} text={'View in OPENSEA'} arrow={true} />
                <motion.div className="flex flex-row mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                  <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="/images/06.png" />
                    <Avatar alt="Travis Howard" src="/images/07.png" />
                    <Avatar alt="Cindy Baker" src="/images/08.png" />
                  </AvatarGroup>
                  <Typography className="text-1xl sm:text-2xl font-bold">
                    14k+
                    <p className="text-gray-500 font-extrathin text-xs -mt-1">Community members</p>
                  </Typography>
                </motion.div>
              </div>
            </motion.div>
          </Grid>

          <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
            <motion.div className="w-full h-full" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <Image id="cube1" src="/images/01.png" alt="Descriptive text" className="object-cover" width={150} height={150} />
              <Image id="cube2" src="/images/02.png" alt="Descriptive text" className="object-cover mt-4 sm:mt-6" width={150} height={150} />
            </motion.div>
          </Grid>

        </Grid>
      </div>
    </motion.section>
  );
}
