import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, loading, direction = "row" }) => {

  // if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction={direction} sx={{ width: '100%' }} flexWrap="wrap" justifyContent="start" alignItems="start">
      {(loading ? Array.from(new Array(15)) : videos).map((item, idx) => (
        <Box key={idx} 
             sx={{ 
                display: 'flex', 
                width:  direction === 'row' ? {
                  xs: '100%',
                  sm: 'calc((100%/2) - 16px)', 
                  md: 'calc((100%/3) - 16px)', 
                  lg: 'calc((100%/4) - 16px)',
                  xl: 'calc((100%/5) - 16px)'
                } : '100%'
             }}
             mx={1}
             mb={2}
        >
          {item?.id?.channelId ?(
            <ChannelCard channelDetail={item} />
          ):(
            <VideoCard video={item} direction={direction === 'row' ? 'column' : 'row'} />
          )}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;