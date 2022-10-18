import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia, Stack, Box, Skeleton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video, direction }) => {
  // const { id: { videoId }, snippet } = video;

  return (
    <Card sx={{ 
            bgcolor: 'transparent',
            width: '100%', 
            boxShadow: "none", 
            borderRadius: 0 
          }}>
      <Stack direction={direction}
             alignItems="center"
             gap={1}>
        <Box sx={{ width:  direction === 'row' ? {
                      xs: '30%', md: '50%',
                   } : '100%'
              }}>
          {video ? (
            <Link to={video?.id?.videoId ? `/video/${video?.id?.videoId}` : `/video/cV2gBU6hKfY` }>
              <img src={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={video?.snippet?.title} 
                width="100%" 
              />
            </Link>
          ) : (
            <Skeleton sx={{ height: 180, bgcolor: '#858484' }} animation="pulse" variant="rectangular" />
          )}
        </Box>

        <CardContent sx={{ width:  direction === 'row' ? {
                               xs: '70%', md: '50%',
                           } : '100%',
                           height: '50px', 
                           padding: "0" }}>
          <Link to={video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl } >
            <Typography sx={{
                color: '#fff',
                fontWeight: 'bold',
                marginBottom: '8px',
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }} 
              variant="subtitle2"
              title={ video?.snippet?.title }
            >
              { video ?(
                  video?.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60) 
              ): (
                  <Skeleton sx={{ bgcolor: 'rgb(255 255 255 / 22%)' }} animation="pulse" /> 
              )}
            </Typography>
          </Link>
          <Link to={video?.snippet?.channelId ? `/channel/${video?.snippet?.channelId}` : demoChannelUrl} >
            <Typography variant="subtitle3" color="gray">
              { video ?(
                video?.snippet?.channelTitle || demoChannelTitle
              ): ( 
                <Skeleton sx={{ bgcolor: 'rgb(255 255 255 / 22%)' }} animation="pulse" width="50%" /> 
              )}
            </Typography>
          </Link>
        </CardContent>
      </Stack>
    </Card>
  )
};

export default VideoCard