import React from 'react'
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'

const projects = [
  {
    title: 'My Portfolio Website',
    image: '',
    desc: '',
    repo: '' ,
    status: 'Coming Soon',
  },
  {
    title: '',
    image: '',
    desc: '',
    repo: '' ,
    status: 'Coming Soon',
  },
  {
    title: '',
    image: '',
    desc: '',
    repo: '' ,
    status: 'Coming Soon',
  },
];

const Projects = () => {
  
  return (
    <div className='flex flex-col gap-4 p-8'>
         <Container sx={{}} maxWidth="md">
          <Grid container spacing={4}>
            {projects.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.status}
                    </Typography>
                    <Typography>
                      {card.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View Repository</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
  )
}

export default Projects