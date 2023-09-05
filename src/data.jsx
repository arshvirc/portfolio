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
//   import SkillImg1 from './assets/img/skills/html5.png';
//   import SkillImg2 from './assets/img/skills/css3.png';
//   import SkillImg3 from './assets/img/skills/js.png';
//   import SkillImg4 from './assets/img/skills/reactjs.png';
//   import SkillImg5 from './assets/img/skills/nextjs.png';
//   import SkillImg6 from './assets/img/skills/nodejs.png';
//   import SkillImg7 from './assets/img/skills/git.png';
//   import SkillImg8 from './assets/img/skills/figma.png';
  
  // navigation
  export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'portfolio',
      href: 'portfolio',
    },
    // {
    //   name: 'academia',
    //   href: 'academia',
    // },
    // {
    //   name: 'career',
    //   href: 'career',
    // },
    {
      name: 'contact',
      href: 'contact',
    },
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