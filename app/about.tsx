import React from 'react'
import { workFlowData } from './data'
import WorkFlowCard from './components/WorkFlow'
import CustomHeader from './components/CustomHeader'

const About: React.FC = () => {
  return (
    <section id="about">
        <div className='w-full flex flex-col items-center mt-28'> 
            <div className='w-full'>
                <CustomHeader plainText={'How it'} colouredText={'Works!'} />
            </div>

            <div className='w-[70%] flex flex-col items-center justify-center px-8'>
                {
                    workFlowData.map(data => 
                    <WorkFlowCard image={data.image} key={data.index} index={data.index} header={data.header} description={data.description} /> 
                )
                }
            </div>

        </div>
    </section>
  )
}

export default About
