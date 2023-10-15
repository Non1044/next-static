'use client'
import React from 'react'
import { Link,Grid,Button,Typography,Card,CardActions,CardContent,CardMedia} from '@mui/material'


async function getData() {
  const res = await fetch('https://www.melivecode.com/api/attractions')
  
  return res.json()
}

export default async function page() {
  const data=await getData()
  return (
    <div>
      <Typography variant="h3">Attractions</Typography>
      <Grid container spacing={1}>
      {data.map(attraction=>(
         <Grid item xs={12} md={4} key={attraction.id}>
         <Card >
         <CardMedia
           sx={{ height: 140 }}
           image={attraction.coverimage}
           title={attraction.name}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
           {attraction.name}
           </Typography>
           <Typography variant="body2" color="text.secondary">
           {attraction.detail}
           </Typography>
         </CardContent>
         <CardActions>
          <Link href={'/attraction/'+attraction.id}>
           <Button size="small">Learn More</Button>
           </Link>
         </CardActions>
       </Card>
       </Grid>
      ))}
      </Grid>
    </div>
  )
}
