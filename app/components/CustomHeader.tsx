import { Typography } from '@mui/material'
import React from 'react'

interface ComponentProps {
    plainText: string,
    colouredText: string
}

const CustomHeader: React.FC<ComponentProps> = ({ plainText, colouredText }) => {
  return (
    <div>
      <Typography className='custom-header ml-[30%] mb-10'>{plainText} <span className='custom-gradient'>{colouredText}</span></Typography>
    </div>
  )
}

export default CustomHeader
