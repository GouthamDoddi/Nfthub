import { Avatar } from '@mui/material'
import React from 'react'
import { ProfileCardData } from '../types'
import { BsDiscord, BsInstagram, BsTwitter } from 'react-icons/bs'
import Image from 'next/image'

const ProfileCard: React.FC<ProfileCardData> = ({ image, name, role }) => {
  return (
    <div className='flex flex-col p-2 w-36 h-150'>
      
      <Avatar sx={{ bgcolor: 'white', border: '1px solid lightgray', width: '8rem', height: '8rem', padding: '2px', borderRadius: '22px' }} variant="square">
        <Image src={image} width={1000} height={100} alt={'avatar'} />
      </Avatar>

      <p className='font-bold text-lg my-1 w-full flex justify-center'>{name}</p>

      <p className='text-sm mb-2 w-full flex justify-center' style={{ color: 'gray' }}>{role}</p>

      <div className='flex flex-row w-full justify-between' >

        <BsTwitter className='mx-1' />

        <BsDiscord className='mx-1' />

        <BsInstagram className='mx-1' />

      </div>

    </div>
  )
}

export default ProfileCard
