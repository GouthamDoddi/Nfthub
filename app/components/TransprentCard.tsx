import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { ReactNode } from 'react'
import { IconType } from 'react-icons'

interface ComponentProps {
    icon: ReactNode,
    header: string,
    description: string
}

const GradientFilter = () => (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <filter id='filter'>
        <linearGradient
          id="gradient-fill"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#464ced" />
          <stop offset="0.5" stopColor="#643f9c" />
          <stop offset="1" stopColor="#e947a0" />
        </linearGradient>
        <filter id='filter' x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
            result="colormatrix"
          />
          <feBlend in="colormatrix" in2="SourceGraphic" mode="normal" />
        </filter>
      </filter>
    </svg>
  );

const TransprentCard: React.FC<ComponentProps> = ({ icon, header, description }) => {
  return (
    <Card sx={{
        borderRadius: 7,
        maxWidth: 250,
        height: 300,
        backgroundColor: 'transparent', 
        border: '1px solid #ccc', 
      }}>

        <div className="px-4 py-10 h-7 w-6">
            <div className="text-gradient">
            {icon}
            </div>
        </div>

      <CardContent>
        <Typography gutterBottom variant="h4" className='text-2xl sm:text-3xl md:text-4xl font-bold' component="div">
          {header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TransprentCard
