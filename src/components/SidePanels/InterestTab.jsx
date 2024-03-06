/* eslint-disable no-unused-vars */
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { interests } from '../../data';

function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#124559' }}>
      {interests.map((item, index) => {
          return (
            <ListItem alignItems="flex-start" key={index}>
              <ListItemAvatar>
                <Avatar alt="" src="src/assets/a.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={
                  <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                    </Typography>
                    {item.info}
                  </React.Fragment>
                }
              />
            </ListItem>
          )
      })}
    </List>
  );
}

const InterestTab = () => {
  return (
    <div className='flex flex-col w-[90%] m-4 bg-[#124559] rounded-md p-4 justify-between lg:hidden'>
      <p>Interests:</p>
      <div className='flex flex-row justify-center gap-8'>
        <AlignItemsList />
      </div>
    </div>
  )
}

export default InterestTab