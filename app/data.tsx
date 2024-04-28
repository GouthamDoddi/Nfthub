import { colors } from '@mui/material';
import { AccordionItemProps, ProfileCardData, RoadmapCardData, TransprentCardData, WorkFlowData } from './types';
import { LuFolderKanban } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { GrGroup } from "react-icons/gr";

export const menuItems:string[] = ['home', 'collection', 'choose', 'about', 'roadmap', 'blog']


export const cardData: TransprentCardData[] = [
    {
        icon: <LuFolderKanban size={40} color='#9d53a6' />
        ,
        header: 'Huge Collection',
        description: `A collection of 890 unique Nerkos built
        by our team of designers and photographers.`
    },
    {
        icon: <FaRegCircleCheck size={40} color='#9d53a6' />, 
        header: 'High Quality',
        description: `A collection of 890 unique Nerkos built
        by our team of designers and photographers.`
    },    {
        icon: <GrCertificate size={40} color='#9d53a6' />, 
        header: 'Top Resource',
        description: `A collection of 890 unique Nerkos built
        by our team of designers and photographers.`
    },    {
        icon: <GrGroup size={40} color='#9d53a6' />, 
        header: 'Big community',
        description: `A collection of 890 unique Nerkos built
        by our team of designers and photographers.`
    }
]

export const cardBelowData: { header: string, description: string }[] = [
    {
        header: '400k+',
        description: `Wallets Connected`
    },
    {
        header: '20k+',
        description: `Wallets Connected`
    },
    {
        header: '230k+',
        description: `Creative artists`
    },
    {
        header: '2.5x',
        description: `Estimated value`
    },
]


export const workFlowData: WorkFlowData[] = [
    {
        image: '/images/03.png',
        index: 1,
        header: 'Setup and connect your wallet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor unt in culpa qui officia deserunt mollit anim id est laborum Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'
    },
    {
        image: '/images/04.png',
        index: 2,
        header: 'Create your own digital artwork.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        image: '/images/05.png',
        index: 3,
        header: 'Choose a platform to sell your NFT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]

export const roadmapData: RoadmapCardData[] = [
    {
        header: 'Phase 01',
        headerMain: 'Planing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        percentage: 0
    },
    {
        header: 'Phase 02',
        headerMain: 'Production',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        percentage: 25
    },
    {
        header: 'Phase 03',
        headerMain: 'Launch',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        percentage: 50
    },
    {
        header: 'Phase 04',
        headerMain: 'Minting',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        percentage: 75
    },
    {
        header: 'Phase 05',
        headerMain: 'New Nfts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        percentage: 95
    },
    {
        header: 'Phase 06',
        headerMain: 'Metaverse',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        percentage: 100
    }
]

export const profileData: ProfileCardData[] = [
    {
        image: '/images/06.png',
        name: 'Steps Jobs',
        role: 'Artist'
    },
    {
        image: '/images/07.png',
        name: 'Andy Moray',
        role: 'Blockchain'
    },
    {
        image: '/images/08.png',
        name: 'Zaid Ed',
        role: 'Developer'
    },
    {
        image: '/images/09.png',
        name: 'Laila Ed',
        role: 'Marketing'
    }
]

export const accordionData: AccordionItemProps[] = [
    {
      title: `What is NFThub's NFT Collection?`,
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.'
    },
    {
      title: `How we can buy and invest NFT?`,
      description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.'
    },
    {
      title: `Why we should choose Nerko's NFT?`,
      description: 'Placeholder description.'
    },
    {
      title: 'Where we can buy and sell NFTs?',
      description: 'Placeholder description.'
    },
    {
      title: 'How secure is this token?',
      description: 'Placeholder description.'
    },
    {
      title: 'What is your contract address?',
      description: 'Placeholder description.'
    }
  ];

