/* eslint-disable no-unused-vars */
import React from 'react'
import {Link } from 'react-scroll'
import { navigation } from '../../data.jsx'

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';

function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#124559' }}>
      <List component="nav">
        {navigation.map((item, index) => {
            return (
              <ListItemButton 
                className='text-white hover:text-accent cursor-pointer' key={index}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            )
          })}
      </List>
    </Box>
  );
}

const NavTab = () => {
  return (
    <div className='w-[90%] m-4 bg-[#124559] rounded-md p-4'>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#124559' }}>
        <List component="nav">
          <ListItemButton className='text-white hover:text-accent cursor-pointer'>
            <ListItemText primary="Arshvir Chaudhary" />
          </ListItemButton>
      </List>
    </Box>
      <Divider />
      <SelectedListItem />
    </div>
  )
}

export default NavTab