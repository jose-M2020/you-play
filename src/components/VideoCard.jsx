import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia, Skeleton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video }) => {
  // const { id: { videoId }, snippet } = video;

  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
      {video ? (
        <Link to={video?.id?.videoId ? `/video/${video?.id?.videoId}` : `/video/cV2gBU6hKfY` }>
          <CardMedia image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={video?.snippet?.title} 
            sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
          />
        </Link>
      ) : (
        <Skeleton sx={{ height: 180, bgcolor: '#858484' }} animation="pulse" variant="rectangular" />
      )}

      <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
        <Link to={video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl } >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            { video ?(
                video?.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60) 
            ): (
                <Skeleton sx={{ bgcolor: 'rgb(255 255 255 / 22%)' }} animation="pulse" /> 
            )}
          </Typography>
        </Link>
        <Link to={video?.snippet?.channelId ? `/channel/${video?.snippet?.channelId}` : demoChannelUrl} >
          <Typography variant="subtitle2" color="gray">
            { video ?(
              video?.snippet?.channelTitle || demoChannelTitle
            ): ( 
              <Skeleton sx={{ bgcolor: 'rgb(255 255 255 / 22%)' }} animation="pulse" width="50%" /> 
            )}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
};

export default VideoCard