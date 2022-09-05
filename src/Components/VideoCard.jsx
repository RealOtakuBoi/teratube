import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../Utils/Constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  return (
    <Card>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} 
        sx={{ width: 358, height: 180 }}/>
        </Link>
        <CardContent sx = {{backgroundColor: '#1e1e1e' , height : '106px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                {snippet?.title.slice(0,40) || demoVideoTitle.slice(0 , 40)}
            </Typography>
        </Link>
        </CardContent>
    </Card>
  )
}
export default VideoCard