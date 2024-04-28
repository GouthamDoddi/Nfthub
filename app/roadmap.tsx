import { Grid } from '@mui/material'
import React from 'react'
import { roadmapData } from './data'
import RoadmapCard from './components/roadmapCard'
import CustomHeader from './components/CustomHeader'



const Roadmap: React.FC = () => {
  return (
    <section id="roadmap">
      <div className="w-full h-full flex justify-center mt-28">
        <div className='w-[70%]'>

            <div className='w-full'>
                <CustomHeader plainText={`Nfthub's`} colouredText={'Roadmap'} />
            </div>

            <Grid container spacing={2}>

            {
                roadmapData.map((data, index) => (

                <Grid key={index} item xs={12} sm={6} md={4}>
                    <RoadmapCard header={data.header} headerMain={data.headerMain} description={data.description} 
                        percentage={data.percentage} />
                </Grid> 
                
                ))
            }

            </Grid>

        </div>
      </div>
    </section>
  )
}

export default Roadmap;
