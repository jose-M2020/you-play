import React from 'react';
import { Box, CardContent, CardMedia, Typography, Skeleton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#fff' }}>
        <Box sx={{ bgcolor: '#5d5c5c', borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}>
          { channelDetail ? (
            <CardMedia
              image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              alt={channelDetail?.snippet?.title}
            />
          ):(
            <Skeleton sx={{ bgcolor: '#858484' }} height='100%' animation="pulse" variant="circular" />
          )}
        </Box>
        { channelDetail ? (
          <Box>
            <Typography variant="h6">
              {channelDetail?.snippet?.title}{' '}
              <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
            </Typography>
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          </Box>
        ):(
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} width="100%">
            <Skeleton sx={{ bgcolor: 'rgb(255 255 255 / 22%)' }} width="100%" />
            <Skeleton sx={{ bgcolor: 'rgb(255 255 255 / 22%)' }} width="60%" />
          </Box>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
