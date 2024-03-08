import React, { useState } from 'react'
import { RefreshOutlined } from '@mui/icons-material'
import { Container, Grid, Card, CardContent, Typography } from '@mui/material'

const facts = [
  {
    heading: 'Fastest 5K Run',
    desc: '25 minutes 23 seconds',

  },
  {
    heading: 'Favourite Song',
    desc: 'Heat Waves - Glass Animals',

  },
  {
    heading: 'Favourite Show',
    desc: 'Money Heist (in Spanish)',

  },
  {
    heading: 'Favourite Show',
    desc: 'Money Heist (in Spanish)',

  },
  {
    heading: 'Fastest 5K Run',
    desc: '25 minutes 23 seconds',

  },
  {
    heading: 'Favourite Song',
    desc: 'Heat Waves - Glass Animals',

  },
  {
    heading: 'Favourite Show',
    desc: 'Money Heist (in Spanish)',

  },
  {
    heading: 'Favourite Show',
    desc: 'Money Heist (in Spanish)',

  },
  {
    heading: 'Favourite Show',
    desc: 'Money Heist (in Spanish)',

  },
  {
    heading: 'Favourite Show',
    desc: 'Money Heist (in Spanish)',

  },
  {
    heading: 'Favourite Show',
    desc: 'Money Heist (in Spanish)',

  },
];

const Misc = () => {
  const [refresh, hitRefresh] = useState(false);
  let nums = new Set();
  while (nums.size !== 3) {
    nums.add(Math.floor(Math.random() * 10) + 1);
  }
  const indexes = [...nums]
  console.log(indexes)



  return (
    <div className='flex flex-row gap-4 p-8'>
        <Container sx={{}} maxWidth="md">
          <Grid container spacing={4}>
            {indexes.map((i, id) => {
              return (
                <Grid item key={id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {facts[i].heading}
                      </Typography>
                      <Typography>
                        {facts[i].desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )})}
          </Grid>
        </Container>
        <RefreshOutlined onClick={()=> hitRefresh(!refresh)} className='hover:text-blue-50' />
    </div>
  )
}

export default Misc