import { Grid } from '@mui/material';
import React from 'react';
import { FaTwitter, FaDiscord, FaLink } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <Grid container className="p-8">
        <Grid item xs={12} sm={6} md={6}>
            <div className="mb-4 md:mb-0">
                <span className="text-2xl font-bold custom-gradient">NFTHub</span>
                <p style={{ color: 'gray' }}>
                    Join our Discord channel or follow us on Twitter to keep up to date with our latest work and announcements.
                </p>
                <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                    <FaTwitter />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                    <FaDiscord />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                    <FaLink />
                    </a>
                </div>
            </div>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
            <div className="flex flex-row justify-around">
            <div>
                <h3 className="text-lg font-semibold mb-2">Quick Link</h3>
                <ul className="space-y-2">
                <li>
                    <a href="#" style={{ color: 'gray' }} className="text-gray-400 hover:text-white">
                    About
                    </a>
                </li>
                <li>
                    <a href="#" style={{ color: 'gray' }} className="text-gray-400 hover:text-white">
                    Collection
                    </a>
                </li>
                <li>
                    <a href="#" style={{ color: 'gray' }} className="text-gray-400 hover:text-white">
                    Roadmap
                    </a>
                </li>
                <li>
                    <a href="#" style={{ color: 'gray' }} className="text-gray-400 hover:text-white">
                    FAQs
                    </a>
                </li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">Community</h3>
                <ul className="space-y-2">
                <li>
                    <a href="#" style={{ color: 'gray' }} className="text-gray-400 hover:text-white">
                    How it works!
                    </a>
                </li>
                <li>
                    <a href="#" style={{ color: 'gray' }} className="text-gray-400 hover:text-white">
                    Blockchain
                    </a>
                </li>
                <li>
                    <a href="#" style={{ color: 'gray' }} className="text-gray-400 hover:text-white">
                    Get in touch
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </Grid>

      </Grid>
      
      <div className="mt-8 text-center">
        <p style={{ color: 'gray' }}>Copyright © 2024 Vidnk. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;