import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './InfoBox.css'

export default function InfoBox({data}) {

  return (
    <div className="info-box">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://t4.ftcdn.net/jpg/04/85/17/33/360_F_485173339_rHVWOWEwZneJpHqgFNiYJLSPQg7hNoAA.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Weather forcast
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span">
          <div className="info-box">
            <p>Feels Like: {data.feels_like}&deg;</p>
            <p>Ground Level: {data.grnd_level}&deg;C</p>
            <p>Humidity: {data.humidity}&deg;C</p>
            <p>Pressure: {data.pressure}&deg;C</p>
            <p>Sea Level: {data.sea_level}&deg;C</p>
            <p>Temperature: {data.temp}&deg;C</p>
            <p>Max Temperature: {data.temp_max}&deg;C</p>
            <p>Min Temperature: {data.temp_min}&deg;C</p>
          </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}