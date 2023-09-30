/* eslint-disable no-unused-vars */
//  icons
import {
    FiGithub,
    FiLinkedin,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin,
  } from 'react-icons/fi';

  import car from "./assets/img/MyLogo.png"
  
//   // skills images
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FolderIcon from '@mui/icons-material/Folder';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
  
  // navigation
  export const navigation = [
    {
      name: 'Home',
      href: 'Home',
      icon: <HomeIcon className='text-[#AEC3B0]'/>
    },
    {
      name: 'About',
      href: 'About',
      icon: <InfoIcon className='text-[#AEC3B0]'/>
    },
    {
      name: 'Projects',
      href: 'Projects',
      icon: <FolderIcon className='text-[#AEC3B0]'/>
    },
    {
      name: 'Experience',
      href: 'Experience',
      icon: <WorkIcon className='text-[#AEC3B0]'/>
    },
    {
      name: 'Academics',
      href: 'Academics',
      icon: <SchoolIcon className='text-[#AEC3B0]'/>
    }
  ];
  
  // social
  export const social = [
    {
      icon: <FiLinkedin />,
      href: '',
    },
    {
      icon: <FiGithub />,
      href: '',
    },
  ];
  
  // projects
  export const projectsData = [
    {
      id: '1',
      image: car,
      name: 'project name 1',
      category: 'UI/UX design',
    },
    {
      id: '2',
      image: car,
      name: 'project name 2',
      category: 'web development',
    },
    {
      id: '3',
      image: car,
      name: 'project name 3',
      category: 'UI/UX design',
    },
    {
      id: '4',
      image: car,
      name: 'project name 4',
      category: 'branding',
    },
    {
      id: '5',
      image: car,
      name: 'project name 5',
      category: 'web development',
    },
    {
      id: '6',
      image: car,
      name: 'project name 6',
      category: 'web development',
    },
  ];
  
  // projects
  export const projectsNav = [
    {
      name: 'all',
    },
    {
      name: 'UI/UX Design',
    },
    {
      name: 'web development',
    },
    {
      name: 'branding',
    },
  ];
  
  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      subtitle: 'I am here to help you.',
      description: 'Email me at hello@youremail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Bucharest, Romania',
      description: 'Serving clients worldwide',
    },
  ];