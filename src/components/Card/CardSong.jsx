import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardSong(props){

    return(
        <Card sx={{ maxWidth: 345, minWidth: 200, minHeight: 250}}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={props.image}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
            
            </Typography>
        </CardContent>
        </Card>
    )
}