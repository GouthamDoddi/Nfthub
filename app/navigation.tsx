"use client"
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { FaInstagram, FaDiscord, FaTwitter, FaWallet } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import { menuItems } from './data';

const preventDefault = (event: React.MouseEvent<HTMLAnchorElement>) => event.preventDefault();

interface ScrollToElementOptions extends ScrollIntoViewOptions {
  offsetTop?: number;
}

const scrollToElement = (elementId: string, options?: ScrollToElementOptions) => {
  const element = document.getElementById(elementId);
  if (element) {
    const { offsetTop = 0, ...scrollOptions } = options || {};
    const top = element.getBoundingClientRect().top + window.pageYOffset - offsetTop;
    window.scrollTo({ top, behavior: 'smooth', ...scrollOptions });
  }
};

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Logic to determine active section based on scroll position
      // and update the activeSection state
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (event:  React.MouseEvent<HTMLAnchorElement, MouseEvent>, elementId: string) => {
    event.preventDefault();
    scrollToElement(elementId, { offsetTop: 100 }); // Adjust offsetTop as needed
    handleMenuClose();
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, elementId: string) => {
    event.preventDefault();
    scrollToElement(elementId, { offsetTop: 100 }); // Adjust offsetTop as needed
    handleMenuClose();
  };


  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  return (
    <nav className='flex flex-row w-full max-w-full sm:w-full md:w-full mt-2'>
        <Link className="ml-[15%] mr-[11%] font-fogsong font-extrabold mt-1 text-xl whitespace-nowrap" underline="hover" color="inherit" href="#home" onClick={(event) => handleLinkClick(event, 'home')}>
        <p>NFTHub</p>
        </Link>


      <Box sx={{ display: { xs: 'none', md: 'block' }, marginTop: '5px' }}>
        <ul className="flex flex-row list-none justify-start">
            {
                menuItems.map( (menuItem, index) =>(
                <li key={index} className="mr-10">
                <Link sx={{ textTransform: 'capitalize', fontWeight: 'bolder' }} underline="hover" color="inherit" href={`#${menuItem}`} onClick={(event) => handleLinkClick(event, menuItem)}>
                    {menuItem}
                </Link>
              </li>))
            }

        </ul>
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'block', lg: 'flex' },  width: '100%', justifyContent: 'center', marginTop: '0.7rem' }}>
        <ul className="flex flex-row list-none">
            <li className="mr-6">
            <FaTwitter />
            </li>
            <li className="mr-6">
            <FaDiscord />
            </li>
            <li className="mr-6">
            <FaInstagram />
            </li>
            <li className="mr-6">
            <FaWallet />
            </li>
        </ul>
      </Box>

      {/* collapsible menu */}
      <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'end', alignItems: 'center', width: '100%', marginRight: '10%' }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <LuMenuSquare />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          {
            
            menuItems.map( (menuItem, index) =>(
            <MenuItem key={index} sx={{ textTransform: 'capitalize' }} onClick={(event) => handleMenuClick(event, menuItem)}>{ menuItem }</MenuItem>
            
            ))}
          <MenuItem disabled>
            <ul className="flex flex-row list-none">
              <li className="mr-2">
                <FaTwitter />
              </li>
              <li className="mr-2">
                <FaDiscord />
              </li>
              <li className="mr-2">
                <FaInstagram />
              </li>
              <li className="mr-2">
                <FaWallet />
              </li>
            </ul>
          </MenuItem>
        </Menu>
      </Box>
    </nav>
  );
}