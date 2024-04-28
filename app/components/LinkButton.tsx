import { Button } from '@mui/material';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

interface customProps {
    link: string;
    text: string;
    arrow: boolean;
}

const LinkButton: React.FC<customProps> = ({ link, text, arrow }) => {
  return (
    <Button
    sx={{ background: 'linear-gradient(to right top,  rgba(70 76 237), rgba(100, 63, 156, 1), rgb(233 71 160));',
        borderRadius: '20px', width: '70%', textTransform: 'none', padding: '10px' }}
    variant='contained' endIcon={arrow ? <GoArrowUpRight />: null}>{text}</Button>
  )
}

export default LinkButton
